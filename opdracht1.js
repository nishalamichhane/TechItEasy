//Opdracht 1 - Array Methoden
//Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
//Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
//Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
//Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

//Opdracht 1a.
const  tvtypes = inventory.map ((inventory) => {
    return (inventory.type)
});
console.log(tvtypes);

//Opdracht 1b.

const uitVerkochtObjecten = inventory.filter((inventory) => {
    return inventory.originalStock === inventory.sold

})
console.log(uitVerkochtObjecten);

//Opdracht 1c

const ambiLightBeschikken = inventory.filter((inventory) => {

    return inventory.options.ambiLight === true
})
console.log(ambiLightBeschikken);

//Opdracht 1d

/*const prijsSoorteerLNH = inventory.sort((a,b) => {
    if(a.price < b.price){
        return -1;
    }
    if(a.price > b.price){
        return 1;
    }
return 0;
})
console.log(prijsSoorteerLNH);*/

const arrPrice = inventory.map((inventory) => {
    return inventory.price;
})

const sortAscPrice = arrPrice.sort((a, b) => a - b);
console.log(sortAscPrice)