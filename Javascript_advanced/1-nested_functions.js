// Define a function named globalVariable that takes a parameter named Welcome
function globalVariable(Welcome){

    // Define a function named outer
    function outer(){

        // Display an alert with the value of the Welcome parameter
        alert (Welcome);

        // Declare a variable named course and assign it the value 'Holberton'
        let course = 'Holberton';

        // Define a function named inner
        function inner(){

            // Display an alert with the value of the Welcome parameter and the course variable
            alert (Welcome + ' ' + course);

            // Declare a variable named exclamation and assign it the value '!'
            let exclamation = '!';

            // Define a function named inception
            function inception(){

                // Display an alert with the value of the Welcome parameter, the course variable, and the exclamation variable
                alert (Welcome + ' ' + course + exclamation);
            }

            // Call the inception function
            inception();
        }

        // Call the inner function
        inner();
    }

    // Call the outer function
    outer();
}

