//Opdracht 3 - Array methoden en functies
//Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou
const  tableField = document.getElementById("table-field");
inventory.map((inventory) =>  {
    return tableField.innerHTML +=  `
        <tr>
        <td id = "brand-field">${ inventory.brand }
    </tr>
    `
 })
//Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!
function showBrands(inventory){
    const  tableField1 = document.getElementById("table-field1");
    inventory.map((inventory) =>  {
        return tableField1.innerHTML +=  `
        <tr>
        <td id = "brand-field1">${ inventory.brand }
    </tr>
    `
    })
}
showBrands(inventory);
`${showBrands(inventory)}`;