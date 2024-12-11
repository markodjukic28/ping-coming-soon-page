const emailInput = document.getElementById('email');
const btnNotify = document.querySelector('.notify');
const errorMsg = document.querySelector('.p-error');

function validateEmail() {
  const email = emailInput.value.trim();
  emailInput.style.border = '1px solid hsl(0, 5%, 88%)';

  if (email.length === 0) {
    errorMsg.innerHTML = 'Email is required';
    emailInput.style.border = '1px solid hsl(354, 100%, 66%)';
    resetError();
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    errorMsg.innerHTML = 'Please provide a valid email address';
    emailInput.style.border = '1px solid hsl(354, 100%, 66%)';
    resetError();
    return false;
  }

  emailInput.placeholder = '';
  return true;
}

function resetError() {
  setTimeout(() => {
    errorMsg.innerHTML = '';
    emailInput.style.border = '1px solid hsl(0, 5%, 88%)';
  }, 3000);
}

btnNotify.addEventListener('click', function () {
  if (validateEmail()) {
    errorMsg.innerHTML = '';
  }
});
