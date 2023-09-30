var emailError = document.getElementById('error');

function validateEmail(){
    var email = document.getElementById('email').value;

    if (email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Please enter a valid email address.';
        return false;
    }
    emailError.innerHTML = '';
    return true;
}