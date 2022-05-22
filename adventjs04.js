function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
    var probando = '';
    /*for (let i = 0; i < height + (height -1); i++) {
        probando = probando + '_ \n';
        
    }*/
    probando = createTrunk(height);

    return probando;

    function createTrunk(height){
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
}

  console.log(createXmasTree(5));









  /*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____


__*__
_***_
*****
__#__
__#__

_____*_____
____***____
___*****___
__*******__
_*********_
***********
_____#_____
_____#_____

*/