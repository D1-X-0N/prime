const colors = require("colors");

const isPrime = (num) => {
  let div = 0;
  if (num > 3) {
    for (let i = 2; i <= (num - (num % 2)) / 2; i++) {
      if (num % i === 0) {
        div = 1;
        break;
      }
    }
  } else {
    if (num == 1) {
      div = 1;
    }
  }
  return div ? false : true;
};

const isNum = (num) => (typeof num === "number" && !isNaN(num) ? true : false);

const from = Number(process.argv[2]);
const to = Number(process.argv[3]);

if (!isNum(from) || !isNum(to)) {
  console.log(colors.red("input arg is not a number"));
} else {
  let count = 0;
  for (let i = from; i < to; i++) {
    if (isPrime(i)) {
      if (count % 3 == 0) {
        console.log(colors.green(i));
      } else if (count % 3 == 1) {
        console.log(colors.yellow(i));
      } else if (count % 3 == 2) {
        console.log(colors.red(i));
      }
      count++;
    }
  }
  if (count == 0) {
    console.log(colors.red("no prime numbers"));
  }
}
