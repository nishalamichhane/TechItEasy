//7.4
/*const popularBookTitle = document.createElement('h3');
popularBookTitle.textContent = "The Great Gatsby";
popularBookTitle.setAttribute('class', 'pink-background');
const popularBookAuthor = document.createElement('p');
popularBookAuthor.textContent = 'Door F. Scott Fitzgerald';

//popularBookTitle.removeAttribute('class');
const popularBook = document.getElementById('popular-book');
popularBook.appendChild(popularBookTitle);
popularBook.appendChild(popularBookAuthor);*/


//1. Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!
// script voor 1b
let btn = document.createElement("button");
btn.innerHTML = "Uitverkochte Exemplaren";
document.body.appendChild(btn);
btn.onclick = function () {
    alert("Uitverkochte Button is clicked");

const uitVerkochtObjecten = inventory.filter((inventory) => {
    return inventory.originalStock === inventory.sold

})
console.log(uitVerkochtObjecten);
};
// script voor 1c
let btn1 = document.createElement("button");
btn1.innerHTML = " Ambilight TV's ";
document.body.appendChild(btn1);

btn1.onclick = function () {
    alert("Ambilight Button is clicked");

    const ambiLightBeschikken = inventory.filter((inventory) => {

        return inventory.options.ambiLight === true
    })
    console.log(ambiLightBeschikken);
};
// script voor 1d
let btn2 = document.createElement("button");
btn2.innerHTML = " Sorteer op prijs ";
document.body.appendChild(btn2);
btn2.onclick = function () {
    alert("Sorteer op prijs Button is clicked");
    const arrPrice = inventory.map((inventory) => {
        return inventory.price;
    })

    const sortAscPrice = arrPrice.sort((a, b) => a - b);
    console.log(sortAscPrice)
};

//2. Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd, dat de uitkomsten worden meegegeven aan jouw functie uit 4e zodat de resultaten daadwerkelijk op de pagina weergegeven worden!
let btn3 = document.createElement("button");
btn3.innerHTML = " Show TV details ";
document.body.appendChild(btn3);
btn3.onclick = function () {
    alert("Show tv details button cliked");

    function showTVBTNPS(inventory) {
        const tableField2 = document.getElementById("table-field2");
        inventory.map((inventory) => {
            return tableField2.innerHTML += `
        <tr>
        <td id = "brand-field2">${inventory.brand} ${inventory.type} - ${inventory.name} 
    </tr>
    <tr>
        <td id = "brand-field2">${inventory.price} 
    </tr>
    <tr>
        <td id = "brand-field2">${inventory.availableSizes} inch (${inventory.availableSizes * 2.54}cm)
    </tr>
    <tr>
        <td id = "brand-field2">&nbsp;
    </tr>
    `
        })
    }

    showTVBTNPS(inventory);
};

