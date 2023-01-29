 /*export default */ function sumPairs(numbers, result) {
    // ¡Y no olvides compartir tu solución en redes!
    var arrayRes = [];
    var numbersUpdated = numbers.slice();
    console.log("numbers", numbers);

  for (let i = 0; i < numbers.length; i++) {
    var myChoosed = numbers[i];
    numbersUpdated.splice(0,1);
 
     for (let e = 0; e < numbersUpdated.length; e++)
    {
      if(myChoosed == 1){console.log("PEEERDONA myChoosed", myChoosed, "numbersUpdated[e]",numbersUpdated[e])}
      if (myChoosed + numbersUpdated[e] == result)
      {
console.log("myChoosed", myChoosed, "numbersUpdated[e]", numbersUpdated[e]);
        arrayRes.push(myChoosed,numbersUpdated[e]);
        return arrayRes;
      }
    } 
  }
    return null
  }

  console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6));
  //[0, 2, 2, 3, -1, 1, 5] y 6, debería ser [1, 5]

/*   sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5] */