const formEvent = (function () {
    const email = document.getElementById('email');
    const country = document.getElementById('country');
    const zipCode = document.getElementById('zipCode');
    const password = document.getElementById('password');
    const confirmPass = document.getElementById('confirmPass');
    const browserForm = document.getElementById('browserForm');
    const error = document.getElementById('error');

    

    browserForm.addEventListener('submit', (e) => {
        if (email.value === '' || country.value === '' || zipCode.value === '' || password.value === '' || confirmPass.value === '') {
            error.innerText = 'One of your fields is blank. Fill in the missing information.';
        } else if (password.value !== confirmPass.value) {
            error.innerText = 'Your password fields do not match.';
        } else {
            error.innerText = '';
        }

        
        e.preventDefault();
    })
})();

