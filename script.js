
const form = document.querySelector('form');

const input_ = document.querySelector('.input_')

const emailField = document.querySelector('input[type=email]');

const errorMessage = document.querySelector('.error_message');

const errorIcon = document.querySelector('.error_icon');


const thanks = document.querySelector('.thanks_message')


form.addEventListener('submit', validate)

emailField.addEventListener('input', removeMessage)


function validate(e) {

    e.preventDefault();

    const email = document.querySelector('input[type=email]').value;

    let regx =/\S+@\S+\.\S+/;
    
    if (!regx.test(email) || email.value == '') {
        errorIcon.style.display = 'block';
        errorMessage.style.display = 'block';
        thanks.style.display ='none';
        input_.style.borderColor = 'var(--soft-red)';
    } else {
        thanks.style.display ='block';
        form.reset();
    }
};


function removeMessage(e) {
    e.preventDefault();
    errorIcon.style.display = 'none';
    errorMessage.style.display = 'none';
    thanks.style.display ='none';

    input_.style.borderColor = '';
}