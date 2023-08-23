let XMLhttprequest = require('xhr2');
// console.log('test');

let xhr = new XMLhttprequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
    let list = JSON.parse(xhr.responseText);
    for(let countriesname of list)
        console.log(countriesname['name']);
        for(let countriesname of list)
        console.log(countriesname['region']);
            for(let countriesname of list)
        console.log(countriesname['subregion']);
            for(let countriesname of list)
    console.log(countriesname['population']);
};

xhr.send();