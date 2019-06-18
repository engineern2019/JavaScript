const userData = JSON.parse(sessionStorage.getItem('userData'));

const nameSpan = document.getElementById('namespan');

// sessionStorage.setItem('userData', JSON.stringify(format));

nameSpan.innerText = userData.firstName + ' ' + userData.lastName;