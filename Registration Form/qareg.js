const format={};

function handlecreate(event){

    for (let control of event) {
        format[control.id] = control.value;
    }
    console.log('completed', event);
    sessionStorage.setItem('userData', JSON.stringify(format));
    window.location = 'nextpage.html';

    return false;
}