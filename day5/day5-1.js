let jsonstr = '{"name":"john","age":"25","dob":"25.02.1999"}';


let obj = JSON.parse(jsonstr)
    
// // for loope
// for (i = 0; i < Object.keys(obj).length; i++){
//     console.log(Object.keys(obj)[i],":",Object.values(obj)[i])
// }

// // for in loope

// for (let x in Object.keys(obj)) {
//     console.log(Object.keys(obj)[x], ':',obj[Object.keys(obj)[x]])
// }


// // for of loope
// for (let x of Object.entries(obj)) {
//     console.log(x[0] , ':', x[1])
// }


// for Each loope

// Object.entries(obj).forEach( x => {
//     console.log(x[0], ':', x[1]);
// })
console.log(obj)