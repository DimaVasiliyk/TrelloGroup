function checkSpam(str){
    let lowstr = str.toLowerCase();

    return lowstr.includes('viagra') || lowstr.includes('xxx')
}
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );