function fetchlogin() {
    const request = new XMLHttpRequest();
    request.open(
        'GET',
        'https://us-central1-qac-sandbox.cloudfunctions.net/login'
    );
    request.onload = () => {

        const parsedData = JSON.parse(request.responseText);
        console.log('DATA', parsedData);
        displaySuperheroData(parsedData);
    };
    request.send();
    console.log('sent!');
}