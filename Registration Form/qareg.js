function handlecreate(event){
    debugger;

    for(let control of event) {
        format[control.id] = control.value;
    }
    console.log('completed', format);

    return false;
}