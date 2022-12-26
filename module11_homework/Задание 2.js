function func(num) {
  let _true = "Число является простым",
    _false = "Данные неверны";
  if (num <= 1 && num > 1000) return _false;
  if (num == 2) return _true;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return _false;
    }
  }
  return _true;
}
console.log(func(1001));
console.log(func(0));
