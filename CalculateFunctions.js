function zero(functn) {
  return calculateNumber(0, functn);
}
function one(functn) {
  return calculateNumber(1, functn);
}
function two(functn) {
  return calculateNumber(2, functn);
}
function three(functn) {
  return calculateNumber(3, functn);
}
function four(functn) {
  return calculateNumber(4, functn);
}
function five(functn) {
  return calculateNumber(5, functn);
}
function six(functn) {
  return calculateNumber(6, functn);
}
function seven(functn) {
  return calculateNumber(7, functn);
}
function eight(functn) {
  return calculateNumber(8, functn);
}
function nine(functn) {
  return calculateNumber(9, functn);
}

function plus(n1) {
  return function(n2){ return n2 + n1 ; }
}
function minus(n1) {
  return function(n2){ return n2 - n1 ; }
}
function times(n1) {
  return function(n2){ return n2 * n1 ; }
}
function dividedBy(n1) {
  return function(n2){ return n2 / n1 ; }
}

function calculateNumber(n, functn){
  if(!functn)
     return n;
  else
     return functn(n);
}