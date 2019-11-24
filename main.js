// URL
let URL = 'https://randomuser.me/api/';
// Header
const maleEl = document.querySelector('#male');
const femaleEl = document.querySelector('#female');
const randomEl = document.querySelector('#random');
const bulkEl = document.querySelector('#bulk');

// User-info
const subEl = document.querySelector('#sub');
const valueEl = document.querySelector('#value');

const profileEl = document.querySelector('#profile');
const profileImgEl = document.querySelector('#profile-img');
const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const dobEl = document.querySelector('#dob');
const mapEl = document.querySelector('#map');
const phoneEl = document.querySelector('#phone');
const passwordEl = document.querySelector('#password');

// Fetching Data
let User = '';
function getData(URL) {
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      User = data.results[0];
      // console.log(User);
      // Set Profile Pic
      profileImgEl.src = `${User.picture.large}`;
    })
    .catch(err => `Error: ${err}`);
}
// Get random user
User = getData(URL);

// Header
maleEl.addEventListener('click', e => {
  URL = 'https://randomuser.me/api/?gender=male';
  console.log(URL);
  User = getData(URL);

  maleEl.classList.add('active');
  femaleEl.classList.remove('active');
  randomEl.classList.remove('active');
  bulkEl.classList.remove('active');
});

femaleEl.addEventListener('click', e => {
  URL = 'https://randomuser.me/api/?gender=female';
  console.log(URL);
  User = getData(URL);

  femaleEl.classList.add('active');
  maleEl.classList.remove('active');
  randomEl.classList.remove('active');
  bulkEl.classList.remove('active');
});

randomEl.addEventListener('click', e => {
  URL = 'https://randomuser.me/api/';
  console.log(URL);
  User = getData(URL);
  randomEl.classList.add('active');
  maleEl.classList.remove('active');
  femaleEl.classList.remove('active');
  bulkEl.classList.remove('active');
});

// User Info
nameEl.addEventListener('mousemove', e => {
  subEl.innerText = 'Hi, My Name is';
  valueEl.innerText = `${User.name.first} ${User.name.last}`;
  nameEl.classList.add('active');
  emailEl.classList.remove('active');
  dobEl.classList.remove('active');
  mapEl.classList.remove('active');
  phoneEl.classList.remove('active');
  passwordEl.classList.remove('active');
});

emailEl.addEventListener('mousemove', e => {
  subEl.innerText = 'My email address is';
  valueEl.innerText = `${User.email}`;

  emailEl.classList.add('active');
  nameEl.classList.remove('active');
  dobEl.classList.remove('active');
  mapEl.classList.remove('active');
  phoneEl.classList.remove('active');
  passwordEl.classList.remove('active');
});

dobEl.addEventListener('mousemove', e => {
  subEl.innerText = 'My birthday is';
  valueEl.innerText = `${User.dob.date}`;

  dobEl.classList.add('active');
  nameEl.classList.remove('active');
  emailEl.classList.remove('active');
  mapEl.classList.remove('active');
  phoneEl.classList.remove('active');
  passwordEl.classList.remove('active');
});

mapEl.addEventListener('mousemove', e => {
  subEl.innerText = 'My address is';
  valueEl.innerText = `${User.location.city}, ${User.location.state}, ${User.location.country}.`;

  mapEl.classList.add('active');
  nameEl.classList.remove('active');
  emailEl.classList.remove('active');
  dobEl.classList.remove('active');
  phoneEl.classList.remove('active');
  passwordEl.classList.remove('active');
});

phoneEl.addEventListener('mousemove', e => {
  subEl.innerText = 'My phone number is';
  valueEl.innerText = `${User.phone}`;

  phoneEl.classList.add('active');
  nameEl.classList.remove('active');
  emailEl.classList.remove('active');
  dobEl.classList.remove('active');
  mapEl.classList.remove('active');
  passwordEl.classList.remove('active');
});

passwordEl.addEventListener('mousemove', e => {
  subEl.innerText = 'My password is';
  valueEl.innerText = `${User.login.password}`;

  passwordEl.classList.add('active');
  nameEl.classList.remove('active');
  emailEl.classList.remove('active');
  dobEl.classList.remove('active');
  mapEl.classList.remove('active');
  phoneEl.classList.remove('active');
});

// SpaceBar
document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
    //spacebar or enter clicks focused element
    try {
      getData(URL);
    } catch (e) {
      console.log(e);
    }
  }
};
