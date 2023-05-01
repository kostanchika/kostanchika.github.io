"use strict"

let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "/../xml/indexD.xml", false);
xmlhttp.send();
let xmlDoc = xmlhttp.responseXML;
let len = xmlDoc.getElementsByTagName('deck').length;
for (let counter = 0; counter < len; counter++) {
    let xmldeck = xmlDoc.getElementsByTagName('deck')[counter].childNodes;
    let container = document.createElement('div');
    container.className = 'row-container';
    let row1 = document.createElement('div');
    row1.className = 'row1';
    let row2 = document.createElement('div');
    row2.className = 'row2';
    for (let i = 3; i <= 17; i += 2) {
        let img = document.createElement('img');
        img.src = xmldeck[i].innerHTML;
        if (i <= 9) {
            row1.appendChild(img);
        } else {
            row2.appendChild(img);
        }
    }
    container.appendChild(row1);
    container.appendChild(row2);
    let info = document.createElement('div');
    info.className = 'info';
    let deckName = document.createElement('p');
    deckName.innerHTML = "Название: ";
    let deckNameT = document.createElement('span');
    deckNameT.className = "deckName";
    deckNameT.innerHTML = xmldeck[1].innerHTML;
    let winRate = document.createElement('p');
    winRate.innerHTML = "Процент побед: ";
    let winRateT = document.createElement('span');
    winRateT.className = 'WinRateGood';
    winRateT.innerHTML = xmldeck[19].innerHTML;
    winRate.appendChild(winRateT);
    let cost = document.createElement('p');
    cost.innerHTML = "Средняя стоимость: ";
    let costT = document.createElement('span');
    costT.className = 'elixir';
    costT.innerHTML = xmldeck[21].innerHTML;
    deckName.appendChild(deckNameT);
    cost.appendChild(costT);
    info.appendChild(deckName);
    info.appendChild(winRate);
    info.appendChild(cost);
    document.body.getElementsByClassName('deck')[counter].appendChild(container);
    document.body.getElementsByClassName('deck')[counter].appendChild(info);
}

