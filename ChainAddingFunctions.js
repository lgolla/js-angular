function add(n){
  var nested =  function(m) {
    return add(n+m);
  };
  nested.valueOf= function(){return n;}
  return nested;
}