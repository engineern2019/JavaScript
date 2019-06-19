function fetchSuperheroes() {
    
    
    const request = new XMLHttpRequest();
    request.onload = () => {
        const parsedData = JSON.parse(request.responseText);
        console.log('DATA', parsedData);
        //displaySuperheroData(parsedData);

        const container = document.getElementById('name').innerHTML = parsedData.squadName;
        document.getElementById('hometown').innerHTML = parsedData.homeTown;

        const memberscontainer = document.getElementById()('member')
        for(let member of parsedData.members){
            const membernameE1 = document.createElement('h2');
            membernameE1.innerText - member.name;
            membernameE1.className='';
            memberscontainer.append(membernameE1)
        }
    };


    request.open('GET','https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json');

    request.send();
    console.log('sent!');
    
    // function displaySuperheroData(data) {
    //     console.log('do stuff here with the data', data.squadName);

    //     document.getElementById('squadName').innerText = data.squadName;
    // displaySuperheroData();

}



// fetchSuperheroes();

