$('#form').submit(function (event) {
    var name = $('#name').val();
    var email = $('#email').val();
    event.preventDefault();
    $.ajax({
        url: 'https://gmail.us18.list-manage.com/subscribe/post',
        method: 'POST',
        data: {u: 'b5fa2acd59ecf5a490a03052d', id: 'c5d8d4555a', EMAIL: email, NAME: name},
        dataType: 'jsonp'
    });
    $.ajax({
        url: 'https://smtl.gama.academy/leads/db228f50-915e-11ea-9e98-2f3c29e0891c',
        method: 'POST',
        data: {name: name, email: email} ,
        success: function() {
            window.location = "https://viagensdoolimpo.netlify.app/thank-you";
        }
    });
});  