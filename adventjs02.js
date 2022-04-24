const letter = "bici coche balón _playstation bici  coche  peluche"; //8

function listGifts(letter) {
  // ¡Tú puedes!
  //////////////////////////////////////TODO
  var divided = letter.split(" ");
  let i = 0;
  divided.forEach(value => {
    //console.log(value);
    //console.log(value[0]);
      if(value[0] === "_"){   
        divided.splice(i,1);
      }    
      if (value === ''){
        divided.splice(i,1);
      } 
      //console.log(i, value, "ESTAMOS");
      divided.value = `${value}:1`;
      i++;      
  });


  return divided;
}

const regalos = listGifts(letter);

console.log(regalos);


//console.log(arr[0]); // "Soy"

//<<>
