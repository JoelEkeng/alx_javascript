/**
 * Displays a welcome message with the full name of the user.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 */

function welcome(firstName, lastName){
    let fullName = firstName + ' ' + lastName;
    function displayFullName(){
        alert('Welcome ' + fullName + '!');
    }
    displayFullName();
}
