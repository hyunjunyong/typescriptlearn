// api url
var url = 'https://jsonplaceholder.typicode.com/users/';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 *
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 *
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 *
 * @returns {Promise<User>}
 */

function fetchUser() {
  return axios.get(url);
}

fetchUser().then((res) => {
  res.address.city;
});

function startApp() {
  fetchUser()
    .then(function (response) {
      user = response.data;
      console.log(user);
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].address;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
