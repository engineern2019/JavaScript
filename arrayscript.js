const array = [1,'2',3,'4',5,'6'];

let total = 0
for(let numeric of array){
    total += parseInt(numeric);
}
console.log(total);