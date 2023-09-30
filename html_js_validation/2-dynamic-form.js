function generateInputFields(numFields) {
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = ''; // Clear previous input fields

    for (let i = 1; i <= numFields; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'field' + i;
        input.placeholder = 'Field ' + i;
        input.required = true;
        inputContainer.appendChild(input);
    }
}

// Function to validate the form before submission
function validateForm(event) {
    const inputFields = document.querySelectorAll('input[type="text"]');
    let isEmpty = false;

    for (const input of inputFields) {
        if (input.value.trim() === '') {
            isEmpty = true;
            break;
        }
    }

    if (isEmpty) {
        alert('Please fill in all fields');
        event.preventDefault(); // Prevent form submission
    }
}

// Attach event listener to the dropdown menu
const numFieldsDropdown = document.getElementById('numFields');
numFieldsDropdown.addEventListener('change', function () {
    const selectedValue = parseInt(numFieldsDropdown.value);
    generateInputFields(selectedValue);
});

// Attach event listener to the form submission
const dynamicForm = document.getElementById('dynamicForm');
dynamicForm.addEventListener('submit', validateForm);

// Initial generation of input fields based on the default selected value
generateInputFields(parseInt(numFieldsDropdown.value));