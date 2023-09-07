function addMeMaybe(number, theFunction){
    for (let i = 0; i < number; number++){
        number ++;
        theFunction();
    }
}

module.exports = {
    addMeMaybe,
};