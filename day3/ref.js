let XMLhttprequest = require('xhr2');
// console.log('test');

let xhr = new XMLhttprequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
    let list = JSON.parse(xhr.responseText);
   
    console.log(list);
};

xhr.send();