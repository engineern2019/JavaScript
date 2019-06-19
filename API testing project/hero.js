function fetchSuperheroes() {
    const request = new XMLHttpRequest();

    request.onload = () => {

        const parsedData = JSON.parse(request.responseText);
        console.log('DATA', parsedData);
        displaySuperheroData(parsedData);
    };

    request.open(
        'GET',
        'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json'
    );

    request.send();
    console.log('sent!');
}

function displaySuperheroData(data) {
    console.log('do stuff here with the data', data.squadName);

    document.getElementById('squadName').innerText = data.squadName;

}

fetchSuperheroes();
