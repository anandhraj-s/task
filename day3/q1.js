let XMLhttprequest = require('xhr2');
// console.log('test');

let xhr = new XMLhttprequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
    let list = JSON.parse(xhr.responseText);
   
 for(let flag of list)
        console.log(flag['flags']);
};

xhr.send();