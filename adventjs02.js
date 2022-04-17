const letter = "bici coche balón _playstation bici  coche peluche";

function listGifts(letter) {
  // ¡Tú puedes!
  //////////////////////////////////////TODO
  var divided = letter.split(" ");

  divided.forEach(value => {
    console.log(value);

      if(!value.length > 0 ){
        console.log('ANTES ', divided);

          divided.splice(0,1);
          //console.log(value);
          console.log('despues ', divided);
      }
  });


  return divided;
}

const regalos = listGifts(letter);

console.log(regalos);


//console.log(arr[0]); // "Soy"

//<<>
