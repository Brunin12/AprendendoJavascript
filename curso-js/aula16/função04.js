function facOf(num) {
  let fac = 1;

  for (var i = num; i > 1; i--) {
    fac *= i;
  }
  return fac;
}

console.log(facOf(5));
