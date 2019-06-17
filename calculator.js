function calc(operator) {
    const a = parseInt (document.getElementById('inputA').value);
    const b = parseInt (document.getElementById('inputB').value);
    const c = a + b;

    if (operator === '+') {
        add(a + b);
    } else if (operator === '-') {
        subtract(a - b);
    } else if (operator === '*') {
        multiply(a * b );
    } else if (operator === '/') {
        divide(a / b);
    }
}

function add(a, b) {
    console.log(a + b);
}
