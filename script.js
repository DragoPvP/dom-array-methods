const main = document.getElementById('main');
const addBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showBtn = document.getElementById('show');
const sortBtn = document.getElementById('sort');
const calcBtn = document.getElementById('calculate');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//Fetch random user and add money
async function getRandomUser() {
   const res = await fetch('https://randomuser.me/api');
   const data = await res.json();

   const user = data.results[0];

   const newUser = {
       name: `${user.name.first} ${user.name.last}`,
       money: Math.floor(Math.random() * 1000000)
   };

   addData(newUser);
}

//Add new obj to data arr
function addData(obj) {
    data.push(obj);
}