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

fetchSuperheroes();

function displaySuperheroData(parsedData) {
    // console.log('do stuff here with the data', parsedData.squadName);

    //document.getElementById('squadName').innerText = parsedData.squadName;
    const squads = document.getElementById('squadName');
    console.log(squads);
    squads.innerHTML = parsedData.squadName;



}
