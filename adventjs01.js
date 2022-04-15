const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

function contarOvejas(ovejas) {
    // aquí tu magia
    //Trying with .map
     /*const ovejillas = ovejas.map(value => {
          if((value.name.toLowerCase()).includes('n') && 
          (value.name.toLowerCase()).includes('a') && 
          value.color == 'rojo')
          {
              return{
                  name: value.name,
                  color: value.color,
              }
          }
      })*/
  
      const ovejasFiltradas = [];
  
      ovejas.forEach(value => {
          if((value.name.toLowerCase()).includes('n') && 
          (value.name.toLowerCase()).includes('a') && 
          value.color == 'rojo'){
              ovejasFiltradas.push(value);
          }
      });
  
    return ovejasFiltradas
  }

  const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

//Respuesta correcta
// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]