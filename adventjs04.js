function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
    var tronco = '';
    var corona = '';
    var width = (height * 2) - 1;

    /*for (let i = 0; i < height + (height -1); i++) {
        probando = probando + '_ \n';
        
    }*/
    tronco = createTrunk(height);
    corona = createCrown(height);
    let res = corona + '\n' +  tronco;


    return res;



    function createTrunk(height){ //height = 5
        console.log("LA MITAD DE ", width, " ES: ", Math.trunc(width/2));
        var trunk = '';
        let i = (width/2) % 2 == 0 ? 0: -1;
        for ( i ; i <= width/2; i++) {
            console.log(i);
            if (i == Math.trunc(width/2))
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

    function createCrown(height){ // 5
        var crown = '';
        let staticWidth = width;
        let miCrown = '';

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
                    //crown = crown + '\n';
                    console.log('QUÉ VALE WIDTH:', width);
                    for (let i = 0 ; i < width; i++) {
                        miCrown = miCrown + '*';
                    } 
                    miCrown = CompleteSpaces(miCrown, staticWidth);
                    
                    crown = miCrown + '\n' + crown;                        
                    break; 
                case (height * 2) - 5:
                    miCrown = '';
                    //crown = crown + '\n';
                    console.log('QUÉ VALE WIDTH:', width);
                    for (let i = 0 ; i < width; i++) {
                        miCrown = miCrown + '*';
                    } 
                    miCrown = CompleteSpaces(miCrown, staticWidth);
                    
                    crown = miCrown + '\n' + crown;    
                    break; 
                    case (height * 2) - 7:
                        miCrown = '';
                        //crown = crown + '\n';
                        console.log('QUÉ VALE WIDTH:', width);
                        for (let i = 0 ; i < width; i++) {
                            miCrown = miCrown + '*';
                        } 
                        miCrown = CompleteSpaces(miCrown, staticWidth);
                        
                        crown = miCrown + '\n' + crown;    
                        break; 
                        case (height * 2) - 9:
                            miCrown = '';
                            //crown = crown + '\n';
                            console.log('QUÉ VALE WIDTH:', width);
                            for (let i = 0 ; i < width; i++) {
                                miCrown = miCrown + '*';
                            } 
                            miCrown = CompleteSpaces(miCrown, staticWidth);
                            
                            crown = miCrown + '\n' + crown;    
                            break; 
                default:
                    break;
            }
            if (width != 1 )
            {
                width = width -2;
            }
        }

        return crown;
    }
}

function CompleteSpaces(actual, width){
    console.log("HOLA desde CompleteSpaces, actual.length=", actual.length , 'width', width, 'actual: ', actual);
    if (actual.length < width)
    {
        console.log("HOLA desde el if CompleteSpaces");

        let total = width - actual.length;
        console.log('total: ', total);
        console.log("DIFERENCIA, total: ", total);
        for (let i = 0; i < total/2; i++)
        {
            actual = '_' + actual + '_';
        }
    }
    return actual;
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
