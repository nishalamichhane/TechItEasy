//Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
const totalSold = (arr) => {
    let total = 0;
    for (let i = 0 ; i < arr.length ; i++){
        total += arr[i].sold;
    }
    return total
}
//console.log(total);
console.log(` No of Tvs sold ${totalSold(inventory)} `);

//Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

const totalGreen = document.getElementById("totalSoldGreen");
totalGreen.textContent = totalSold(inventory);

//Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

const originalStock = (arr1) => {
    let total1 = 0;
    for (let i = 0 ; i < arr1.length ; i++){
        total1 += arr1[i].originalStock;
    }
    return total1
}
//console.log(originalStock());
console.log(`Total stock of TV ${originalStock(inventory)} `);

//Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
const totalBlue = document.getElementById("totalStockBlue");
totalBlue.textContent = originalStock(inventory);

//Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

const remainingStock = (arr2) => {
    let total2 = 0;
    let total3 = 0;
    let total4 = 0;
    for (let i = 0 ; i < arr2.length ; i++){
        total2 += arr2[i].originalStock;
        total3 += arr2[i].sold;
        total4 = total2 - total3;
    }
    return total4
}
//console.log(originalStock());
console.log(`Remaining Stock of TV ${remainingStock(inventory)} `);