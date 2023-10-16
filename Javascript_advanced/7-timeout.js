console.log('Start of the excution queue');

setTimeout(() => {
    /**
     * Loop through numbers 1 to 100 and execute code block for each number.
     */
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
    console.log('End of the loop printing');
},0);

console.log('Final code block to be executed');