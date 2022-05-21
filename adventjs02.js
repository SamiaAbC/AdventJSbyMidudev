const letter = "bici coche balón _playstation bici  coche  peluche"; //8

function listGifts(letter) {
  // ¡Tú puedes!
  //////////////////////////////////////TODO
  var divided = letter.split(" ");
  let i = 0;

  divided.forEach(value => {
      if(value[0] === "_" || value === ''){   
        divided.splice(i,1);
      }         
      i++;      
  });
  
  var res = [];
  var repetidas;
  for(let j = 0; j <= divided.length-1; j++)
  {
    repetidas = VecesRepetidas(divided[j], divided);
    //Creo array de 'ya contado'
    if(!res.includes(divided[j]))
    {
      res[j] = divided[j] + ": " + repetidas;
      console.log("Hello");
    }
  }

  return res;
}

function VecesRepetidas(word, Array)
{
  var contador = 0;
  for(let i = 0; i <= Array.length; i++)
  {
    if (Array[i] == word)
    contador++;
  }
  return contador;
}

const regalos = listGifts(letter);

console.log(regalos);

//console.log(arr[0]); // "Soy"

//<<>
