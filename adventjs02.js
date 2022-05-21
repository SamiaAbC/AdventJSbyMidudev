const letter = "bici coche balón   _playstation bici  coche  peluche"; //8

function listGifts(letter) {
  // ¡Tú puedes!
  //////////////////////////////////////TODO
  var divided = letter.split(" ");
  let i = 0;

  divided = divided.map(element => {
    return element.trim();
  });
  divided.forEach(value => {
      if(value[0] === "_" || value === ''){   
        divided.splice(i,1);
      }         
      i++;      
  });
  
  var res = {};
  var contadas = [];
  var repetidas;
  for(let j = 0; j <= divided.length-1; j++)
  {
    if (!contadas.includes(divided[j]))
    {
      repetidas = VecesRepetidas(divided[j], divided);
      //Concierto el objeto en array para comprobar si ya fue checkeado
      if(!Object.values(res).includes(divided[j]))
      {
        //res.push(divided[j] + ": " + repetidas);
        res[divided[j]] = repetidas;
      }
      contadas.push(divided[j]);
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

//<<>
