"use strict"

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    //Переключение row
    let xmlhttp = new XMLHttpRequest();
    let popc = document.getElementById("popc");
    let deck1 = popc.childNodes[1]
    let rowC = deck1.childNodes[1]
    let row = rowC.childNodes[1]
    xmlhttp.open("GET", "/../xml/data.xml", false);
    xmlhttp.send();
    let xmlDoc = xmlhttp.responseXML;

    var x = xmlDoc.getElementsByTagName("card");
    let j = 1;
    for (let i = 0; i < 4; i++)
    {
        let card = row.childNodes[j]
        console.log(x[i].innerHTML)
        card.src = x[i].innerHTML;
        j += 2;
    }
    j = 1
    row = rowC.childNodes[3]
    for (let i = 4; i < 8; i++)
    {
        let card = row.childNodes[j]
        console.log(x[i].innerHTML)
        card.src = x[i].innerHTML;
        j += 2;
    }
}