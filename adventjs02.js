const letter = "bici coche balón _playstation bici  coche  peluche"; //8

function listGifts(letter) {
  // ¡Tú puedes!
  //////////////////////////////////////TODO
<<<<<<< HEAD
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
=======

  //separate the array by the spaces
  var divided = letter.split(" ");

  var pos = 0;
  divided.forEach((value) =>{
    if (divided[pos].length === 0)
    {
      divided.splice(pos,1);
    }
    else{
      divided[pos] = `${divided[pos]}: 1`;
      console.log(divided[pos], pos);
console.log(value);
      pos++;
    }

  } );
console.log('DIVIDIDO', divided);

  for (var i = 0; i<divided.length; i++ )
  {
  //Remove empty spaces
 /*  if(divided[i].length === 0)
  {
    divided.splice(i,1);
  } */
  if (divided[i].charAt(0) === '_')
  {
    divided.splice(i,1);
  }
  for (var j = 0; j < divided.length; j ++){
    if (divided[i] === divided[j]){
      if(j != i)
      divided.splice(i,1);
    }
  } 
} 
  return divided;
>>>>>>> cf9c26ae049f9c740c6a4b457a8e471c024923cc
}

const regalos = listGifts(letter);

console.log(regalos);

<<<<<<< HEAD
//console.log(arr[0]); // "Soy"

=======
>>>>>>> cf9c26ae049f9c740c6a4b457a8e471c024923cc
//<<>
//Ejecutar node _____.js
