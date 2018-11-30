
let age = document.getElementById('age');

let user = {
  value: 24
};
function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.apply(user,['Astapovich', 'Andrey']);
