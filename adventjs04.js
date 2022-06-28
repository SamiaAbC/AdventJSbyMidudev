function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
    var tronco = '';
    var corona = '';
    /*for (let i = 0; i < height + (height -1); i++) {
        probando = probando + '_ \n';
        
    }*/
    tronco = createTrunk(height);
    corona = createCrown(height);
    let res = corona + '\n' +  tronco;


    return res;



    function createTrunk(height){ //height = 5
        var trunk = '';
        let i = height % 2 == 0 ? 0: -1;
        for ( i ; i <= height; i++) {
            if (i == Math.trunc(height/2))
            {
                trunk = trunk + '#';
            }
            else
            {
                trunk = trunk + '_';                
            }
            
        }
        trunk = trunk + '\n' + trunk;
        //console.log(Math.trunc(height/2));
        return trunk;
    }

    function createCrown(height){
        var crown = '';
        let width = (height * 2) - 1;

        //Poner otro for
        //Ir viendo cuánto debe ocupar relleno cada línea de la corona, y si los astericos no lo llenan, añadir guiones bajos a los lados.
        for (let z = 0; z < height; z++) // width vale 9, y height vale 5 (la primera vez)
        {
            switch (width) {
                case (height * 2) - 1:
                    console.log('QUÉ VALE WIDTH PRIMERO:', width);

                    for (let i = 0 ; i < width; i++) {
                        crown = crown + '*';
                    }           
                    break;
                case (height * 2) - 3:
                    let miCrown = '';
                    //crown = crown + '\n';
                    console.log('QUÉ VALE WIDTH:', width);
                    for (let i = 0 ; i < width; i++) {
                        miCrown = miCrown + '*';
                    } 
                    crown = miCrown + '\n' + crown;    
                    break; 

                default:
                    break;
            }
            //console.log("Hola ", width, '\n', crown);
            if (width != 1 )
            {
                width = width -2;
            }
        }

        return crown;
    }
}

  console.log(createXmasTree(5));









  /*
  Si le digo de 5, la corona parte más larga es de: 9 (5*2-1)
____*____
___***___
__*****__
_*******_
*********
____#____
____#____


  Si le digo de 3, la corona parte más larga es de: 5 (3*2-1)
__*__
_***_
*****
__#__
__#__


  Si le digo de 6, la corona parte más larga es de: 11 (6*2-1)

_____*_____
____***____
___*****___
__*******__
_*********_
***********
_____#_____
_____#_____

*/
