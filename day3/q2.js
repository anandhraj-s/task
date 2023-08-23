let XMLhttprequest = require('xhr2');
// console.log('test');

let xhr = new XMLhttprequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
    let list = JSON.parse(xhr.responseText);
   for(let flags of list)
    console.log(flags['flags']);
};

xhr.send();