function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки
  
  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element)
    }

    // Пиши код выше этой строки
  });
      return commonElements;
}
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
console.log(getCommonElements([1, 2, 3, 5], [10, 20, 30, 5]));