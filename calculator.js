function calc() {
    const valA = +document.getElementById('inputA').value;
    const valB = +document.getElementById('inputB').value;

    return{
        add: function() {
            writeOutput(valA + valB);
        },
        subt: function() {
            writeOutput(valA - valB);
        },
        div: function() {
            writeOutput(valA / valB);
        },
        mult: function() {
            writeOutput(valA * valB);
        }        
    };
}   

        
function writeOutput(out) {
    console.log(out);
    document.getElementById('result').innerText = out;
}