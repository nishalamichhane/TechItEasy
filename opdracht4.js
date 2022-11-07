//4.a Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
/*function brandTypeName(inventory){
    const  tableField2 = document.getElementById("table-field2");
    inventory.map((inventory) =>  {
        return tableField2.innerHTML +=  `
        <tr>
        <td id = "brand-field2">${ inventory.brand + " "+ inventory.type + " - " + inventory.name }
    </tr>
    `
    })
}
brandTypeName(inventory);*/
function brandTypeName(inventory){
    for(let i=0; i<inventory.length; i++){
        console.log(inventory[0].brand + " "+ inventory[0].type + " - " + inventory[0].name);
    }
}
brandTypeName(inventory);

//4.b Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.

function tvPrice(inventory){
    for(let i=0; i<inventory.length; i++){
        console.log("$" + inventory[0].price);
    }
}
tvPrice(inventory);

//Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.

function availableSizes(inventory){

    let output = [];

    for(let i=0; i<inventory.length;i++){
        let arr = [];
       for(let j=0; j<inventory[i].availableSizes.length;j++){
           let currentSizeInch = inventory[i]['availableSizes'][j];
           let currentSizeCM = inventory[i]['availableSizes'][j] * 2.54;
           arr.push(`${currentSizeInch} inch (${currentSizeCM} cm)`);
       }
       console.log(arr);
       //output[i].push(arr);
       // console.log(output[i]);
       // console.log(currentSizeCM);
    }
}
availableSizes(inventory);


//opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
function showForBrandTyNaPrSz(inventory){
    for(let i=0; i<inventory.length; i++){

        const brandTypeName = inventory[i].brand + inventory[i].type  + "-" +  inventory[i].name ;
        const price = inventory[i].price;
        const currentSizeInch = inventory[i].availableSizes;
        const currentSizeCM = inventory[i].availableSizes * 2.54;
        const size = `${currentSizeInch} inch (${currentSizeCM} cm)`;
        return brandTypeName + " " + price + " " + size;

    }

}
const tvDetails = document.getElementById("TvDetails");
tvDetails.textContent = `${showForBrandTyNaPrSz(inventory)}`;

//Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

function showTVBTNPS(inventory){
    const  tableField2 = document.getElementById("table-field2");
    inventory.map((inventory) =>  {
        return tableField2.innerHTML +=  `
        <tr>
        <td id = "brand-field2">${ inventory.brand } ${ inventory.type } - ${ inventory.name } 
    </tr>
    <tr>
        <td id = "brand-field2">${ inventory.price } 
    </tr>
    <tr>
        <td id = "brand-field2">${ inventory.availableSizes } inch (${ inventory.availableSizes * 2.54 }cm)
    </tr>
    <tr>
        <td id = "brand-field2">&nbsp;
    </tr>
    `
    })
}
showTVBTNPS(inventory);