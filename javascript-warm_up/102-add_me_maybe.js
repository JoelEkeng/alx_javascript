function addMeMaybe(number, theFunction){{
        number += 1;
        theFunction();
    }
}

module.exports = {
    addMeMaybe,
};