function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }

    
  });
   
  
    // Пиши код выше этой строки
    return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
console.log(filterArray([10,13], 60));
