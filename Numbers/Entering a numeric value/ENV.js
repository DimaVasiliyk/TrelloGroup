function readNumber() {
    let num;

    do{
    num = prompt("Введите число")
    } while (isFinite("num"));

    if (num === null){
        return null     
    }
    else if(num === " "){
        return null 
    }
    return +num;
}
alert(`Число:${readNumber()}`)