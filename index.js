function add(a, b) {
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}

function inc(a) {
  return a += 1;
}

function dec(a) {
  return a -= 1;
}

function makeInt(a){ //Parse a as an integer and return that integer.
  number = parseInt(a, 10);
  return number;
}

function preserveDecimal(a){ 
  number = parseFloat(a, 10);
  return number;
}
