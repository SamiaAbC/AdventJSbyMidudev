function daysToXmas(date) {
    // ¡Y no olvides compartir tu solución en redes!
    //return 0

    let date1 = new Date('Dec 1, 2021');
    let date2 = new Date('Dec 6, 2021');

    return date1-date2;
}

console.log(daysToXmas(new Date('Dec 1, 2021')));