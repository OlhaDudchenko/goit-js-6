function changeEven(numbers, value) {
    // Пиши код ниже этой строки
  const newArray = [];
  numbers.forEach(number => {
    if (number % 2 === 0) {
      newArray.push(number + value);
    }
  
    else { newArray.push(number);}})
    return newArray;
  
    }
    // Пиши код выше этой строки
const numbers = [1, 2, 3, 4, 5];

console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
console.log(numbers);
