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

    updateDOM();
}

//Update DOM
function updateDOM(provideData = data) {
    //Clear main Div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
    
    provideData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    });
}

//Format number as money
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//Event Listeners
addBtn.addEventListener('click', getRandomUser);