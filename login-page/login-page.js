const usernameElement = document.querySelector('.js-username-input');

const passwordElement = document.querySelector('.js-password-input');

const loginButtonElement = document.querySelector('.js-login-button');

const messageElement = document.querySelector('.message-container');

const username = 'sameer';
const password = 'weakpassword';

loginButtonElement.addEventListener('click', () => {
  if (usernameElement.value === username && passwordElement.value === password){
    usernameElement.value = '';
    passwordElement.value = '';

    if (messageElement.classList.contains('message-container-displayed')){
      messageElement.classList.remove('message-container-displayed');
    }

    window.location.href = 'page.html';
  }

  else {
    messageElement.classList.add('message-container-displayed')
  }
})
