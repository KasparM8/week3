const btnSubmit = document.querySelector('button');
const usernameInputField = document.querySelector('#username');
const userAgeInputField = document.querySelector('#age');
const loginMessage = document.querySelector('.login-message')


btnSubmit.addEventListener('click', () => {
    const usernameInput = usernameInputField.value.toLowerCase(); // Harry, haRry
    const userAgeInput = userAgeInputField.value;

//     if(usernameInput === 'Meos' && userAgeInput === '16') {

//     console.log('welcome');
//     loginMessage.textContent = 'Welcome, Mr.Meos!'
//     loginMessage.style.color = 'green'

// } else { 

//     loginMessage.textContent ='You are not Mr.Meos'
//     loginMessage.style.color = 'red'


//         console.log('go away')
//     }
      if(usernameInput !== 'meos' || userAgeInput !== '16' ){
        loginMessage.textContent = 'You are not Mr.Meos'
     loginMessage.style.color = 'red'

      } else {
        loginMessage.textContent = 'Welcome, Mr.Meos!'
        loginMessage.style.color = 'green'
      }
});
