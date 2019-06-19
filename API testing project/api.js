const request = new XMLHttpRequest();
request,onload = function(){
    console.log('loaded!');
    console.log(request.responseText);
}
request.open('GET', 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json');

request.send();
console.log('sent');