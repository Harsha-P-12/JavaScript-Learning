var x = 1;
let y = 2;
const z = 3;

{
  var x = 10; // affects outer scope (function/global)
  let y = 20; // new block-scoped variable, overrides outer y
  const z = 30; // new block-scoped variable, overrides outer z

  console.log(x); // 10
  console.log(y); // 20
  console.log(z); // 30
}

console.log(x); // 10 (var redeclared globally)
console.log(y); // 2  (outer let unaffected)
console.log(z); // 3  (outer const unaffected)
