#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);

  function incr(myobject){
    objectvalue = myObject.value;
    objectvalue++;
  }

  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  