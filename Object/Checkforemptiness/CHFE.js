// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:


let schedule = {};
console.log( isEmpty(schedule) ); 
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); 

function isEmpty(obj){
    for (let key in obj) {
        return false
    }
    return true
}
