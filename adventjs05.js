function daysToXmas(date) {
    // ¡Y no olvides compartir tu solución en redes!
    //return 0

    let date1 = new Date('Dec 1, 2021');
    let date2 = new Date('Dec 6, 2021');

    var first = '2020-12-01T00:00:00Z';//'01/25/2020';
    var second = 'January 15, 2020';
 
    var x = new Date(first);
   // x.setMinutes(x.getMinutes() + x.getTimezoneOffset());
    var y = new Date(second);
    console.log('Mirando el getMinutes de first: ', date1.getMinutes());

    y.setMinutes(y.getMinutes() + y.getTimezoneOffset())

    console.log('first: ', first, '\n',  'x: ', x, '\n', 'second: ', second, '\n','y: ', y);
//fecha.setMinutes(fecha.getMinutes() + fecha.getTimezoneOffset())


    return date1-date2;
}

console.log(daysToXmas(new Date('Dec 1, 2021')));