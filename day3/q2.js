let obj1 = '{ "name": "person1", "age": 5 }'
let obj2 = '{ "age": 5, "name": "person1" }'


let a = JSON.parse(obj1);

let b = JSON.parse(obj2);


console.log((Object.entries(a)) == (Object.entries(a)));

console.log(a[]) == (b[])

function first (a, b){
    let res = true
   if  (Object.keys(a).length) == console.log(Object.keys(b).length){
        for (keys in a) {
            if (a[keys] == b[keys]) {
                continue;
            }
            else {
                res = false;
                break;
            }
            
        }
    }else {
        res = false;
        break
}
} console.log(res)
first(a,b)

console.log((a[0,1]) == (b[0,1]))
