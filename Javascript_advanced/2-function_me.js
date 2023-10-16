function welcomeMessage(fullName) {
    // The inner function is a closure that alerts the welcome message with the provided fullName
    return function () {
      alert('Welcome ' + fullName);
    };
  }
  
  // Create three functions with different names
  var guillaume = welcomeMessage('Guillaume');
  var alex = welcomeMessage('Alex');
  var fred = welcomeMessage('Fred');
  
  // Testing the functions
  guillaume(); // Displays "Welcome Guillaume" in an alert
  alex();      // Displays "Welcome Alex" in an alert
  fred();      // Displays "Welcome Fred" in an alert
  