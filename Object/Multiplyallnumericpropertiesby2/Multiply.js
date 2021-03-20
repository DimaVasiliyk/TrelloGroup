let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
isEmpty(menu)
console.log(menu)
function isEmpty(sobj){
    for (let key in sobj) {
        // console.log(typeof key)
        if (typeof sobj[key] === "number"){
            sobj[key]*=2
            
        }
    }
}






//   // после вызова функции
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };