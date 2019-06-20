$("#login-button").click(function(event){
    event.preventDefault();

$('form').fadeOut(500);
$('.wrapper').addClass('form-success');
});

function getLogins() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://us-central1-qac-sandbox.cloudfunctions.net/getUsers');
    request.onload =  () => {
        const parsedData = JSON.parse(request.responseText);
        console.log('DATA', parsedData);
    };
    request.send();
}

getLogins();