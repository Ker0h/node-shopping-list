const express = require('express');
const router = express.Router();

let data = [{name: 'Toiletpaper'}];

router.get('/', (req, res) => {
    res.render('shopping_list', {products: data});
});

router.post('/', (req, res) => {
    res.send('Todo');
});

router.delete('/', (req, res) => {
    res.send('Todo');
});

module.exports = router;