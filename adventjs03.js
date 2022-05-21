/* "bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌ */

letter = "bici coche (())(balón bici coche";
function isValid(letter) {
  var res = false;
  var resto;

  // ¡No dejes que el Grinch gane!
  var NotValid = letter.includes('()');
  if (!NotValid){
    for (let i = 0; i < letter.length; i++) {
        if (letter[i] === "(") {
          resto = letter.substring(i + 1, letter.length);
          break;
        }
      }
      if (resto.length) {
        for (let i = 0; i < resto.length; i++) {
          if (resto[i] === ")" && i != 0) {
            res = true;
          }
          if (resto[i] === '{' || resto[i] === '[')
          {
            res = false;
            break;
          }
        }
      }
  }  

  return res;
}

console.log(isValid(letter));
