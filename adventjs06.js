 /*export default */ function sumPairs(numbers, result) {
    // ¡Y no olvides compartir tu solución en redes!
    var arrayRes = [];
    var numbersUpdated = numbers.slice();

    // TODO Use foreach instead of for
  for (let i = 0; i < numbers.length; i++) {
    var myChoosed = numbers[i];
    numbersUpdated.splice(0,1);
 
     for (let e = 0; e < numbersUpdated.length; e++)
    {
      if (myChoosed + numbersUpdated[e] == result)
      {
        arrayRes.push(myChoosed,numbersUpdated[e]);
        return arrayRes;
      }
    } 
  }
    return null
  }

  console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6));
  //[0, 2, 2, 3, -1, 1, 5] y 6, debería ser [1, 5]