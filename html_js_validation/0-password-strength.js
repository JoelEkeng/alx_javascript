var passworderror = document.getElementById('error')

function validatePassword(){
    var password = document.getElementById('password').value;
    var required = 8;

    if(password.length == 0){
        passworderror.innerHTML = 'Password is required';
        return false;
    }
    if (password.length < required){
        passworderror.innerHTML = 'Password should be at least 8 characters long';
        return false;
    }
    if (!/[A-Z]/.test(password)){
        passworderror.innerHTML = 'Password should be at least one uppercase letter';
        return false;
    }
    if (!/[a-z]/.test(password)){
        passworderror.innerHTML = 'Password should be at least one lowercase letter';
        return false;
    }
    if (!/[0-9]/.test(password)){
        passworderror.innerHTML = 'Password should be at least one numeric digit';
        return false;
    }
    if (!/[., !@#$%^&*]/.test(password)){
        passworderror.innerHTML = 'Password should be at least one special character (e.g., !@#$%^&*)';
        return false;
    }
    passworderror.innerHTML = '';
    return true;
} 