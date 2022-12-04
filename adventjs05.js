function daysToXmas(date) {
    const elDay = new Date('Dec 25, 2021 00:00:00');
    //Por algún motivo da error si pongo los números sólo
    const theDay = new Date(Date.UTC(elDay.getFullYear(), elDay.getMonth(), elDay.getDate(), elDay.getHours(), elDay.getMinutes(), elDay.getSeconds()));

    const incomingDate =  new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
 
    let resta = theDay-incomingDate;
    return Math.round(resta/ (1000*60*60*24)); 
}

console.log(daysToXmas(new Date('Dec 02, 2021 23:59:59')));