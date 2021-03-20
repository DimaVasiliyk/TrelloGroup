let userName = prompt("Кто там?", '');

if (userName == 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass == 'Я главный') {
    console.log( 'Здравствуйте!' );
  } else if (pass == '' || pass == null) {
    aconsole.log( 'Отменено' );
  } else {
    console.log( 'Неверный пароль' );
  }

} else if (userName == '' || userName == null) {
    console.log( 'Отменено' );
} else {
  console.log( "Я вас не знаю" );
}