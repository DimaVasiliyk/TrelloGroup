let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let result=isEmpty(salaries)
console.log(result)
function isEmpty(sobj){
    let sum = 0;
    for (let key in sobj) {
        sum += sobj[key]
    }
    return sum;
}
