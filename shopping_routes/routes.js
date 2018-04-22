const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://kero:wolfje96@ds151169.mlab.com:51169/shopping-list');

let productSchema = mongoose.Schema({
    name: String
});

let Product = mongoose.model('Product', productSchema);


let urlencodedParser = bodyParser.urlencoded({extended:false});

router.get('/', (req, res) => {
    Product.find({}, (err, data) => {
        if (err) throw err;
        res.render('shopping_list', {products: data});
    });
});

router.post('/', urlencodedParser, (req, res) => {
    let newProduct = Product(req.body).save((err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

router.delete('/:product', (req, res) => {
    Product.find({name: req.params.product.replace(/\-/g, " ")}).remove((err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

module.exports = router;