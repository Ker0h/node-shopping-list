$(document).ready(function(){

    $('form').on('submit', function(){

        let input = $('form input');
        let product = {name: input.val()};

        $.ajax({
            type: 'POST',
            url: '/',
            data: product,
            success: function(data){
                //do something with the data via front-end framework
                location.reload();
            }
        });

        return false;

    });

    $('li').on('click', function(){
        let product = $(this).text().replace(/ /g, "-");
        $.ajax({
            type: 'DELETE',
            url: '/' + product,
            success: function(data){
                //do something with the data via front-end framework
                location.reload();
            }
        });
    });

});