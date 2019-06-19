const userData = JSON.parse(sessionStorage.getItem('userData'));

//onst nameSpan = document.getElementById('namespan');

// sessionStorage.setItem('userData', JSON.stringify(format));

//nameSpan.innerText = userData.firstName + ' ' + userData.lastName;

const container = document.getElementById('completed');
for(let key in userData){
    const el = document.createElement('h4');
    el.innerText = key + ': ' + userData[key];
    container.append(el);
}