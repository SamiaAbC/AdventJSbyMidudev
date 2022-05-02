const letter = "bici coche balón _playstation bici  coche  peluche"; //8

function listGifts(letter) {
  // ¡Tú puedes!
  //////////////////////////////////////TODO

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
}

const regalos = listGifts(letter);

console.log(regalos);

//<<>

