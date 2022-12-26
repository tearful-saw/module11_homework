function sum() {
  let a = 10;
  return a;
}

function sumNub(func) {
  let a = 5 + func();
  console.log(a);
}

sumNub(sum);

// или
function argument(a) {
  function sum(b) {
    console.log(a + b)
    return a + b
  }
  return sum
}


const result = argument(12)(5);