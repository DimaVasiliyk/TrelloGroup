// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let user={
    name: "John",
    surname: "Smith",
};
user.name = "Pete";
delete user.name;
console.log(user.name)