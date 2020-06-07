
$('form').on('submit', (e) => {

e.preventDefault()

const email = $('#email').val().trim();

const name = $('#name').val().trim();


const subject = $('#subject').val().trim();

const text = $('#text').val().trim();


const data = {
        email,
       name,
       text
};
$.post('/email', data, function(){

console.log('server recieve our data');

});

});