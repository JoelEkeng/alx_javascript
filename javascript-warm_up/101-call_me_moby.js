#!/usr/bin/node
function callMeMoby(x, thefunction){
    for (let i = 1; 1<=x; i++){
        thefunction();
    }
} 

module.exports = {
    callMeMoby,
};