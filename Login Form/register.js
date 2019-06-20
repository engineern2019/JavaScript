$("#login-button").click(function(event){
    event.preventDefault();

$('form').fadeOut(500);
$('.wrapper').addClass('form-success');
});

function signupUser() {

    const req = new XMLHttpRequest();
    req.onload = () => {
    }

    req.open('POST', 'https://us-central1-qac-sandbox.cloudfunctions.net/setUser');
    req.setRequestHeader('Content-Type', 'application/json');
    req.send( { 
        "username": "main",
        "password": "Luna",
        "firstName": "tipu",
        "lastName": "sultan",
        "email": "kicked@out.uk"
    } );
}

signupUser();