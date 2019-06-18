const something = 'something'

function muFunctionName() {
    const something = 'this is locally scoped';
    
    function nestedFunction() {

        console.log(something);
    }
}

myFunctionName();