"use strict"

let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "/../xml/decks.xml", false);
xmlhttp.send();
let xmlDoc = xmlhttp.responseXML;
let len = xmlDoc.getElementsByTagName('deck').length;
for (let counter = 0; counter < len; counter++) {
    let xmldeck = xmlDoc.getElementsByTagName('deck')[counter].childNodes;
    let div = document.createElement('div');
    div.className = 'deck';
    let deckName = document.createElement('h3');
    deckName.innerHTML = xmldeck[1].innerHTML;
    div.appendChild(deckName);
    let cards = document.createElement('div');
    cards.className = 'cards';
    let row1 = document.createElement('div');
    row1.className = 'row1';
    for (let i = 3; i <= 9; i += 2) {
        let img = document.createElement('img');
        img.src = xmldeck[i].innerHTML;
        row1.appendChild(img);
    }
    let row2 = document.createElement('div');
    row2.className = 'row2';
    for (let i = 11; i <= 17; i += 2) {
        let img = document.createElement('img');
        img.src = xmldeck[i].innerHTML;
        row2.appendChild(img);
    }
    cards.appendChild(row1);
    cards.appendChild(row2);
    let info = document.createElement   ('div');
    info.className = 'info';
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
    cost.appendChild(costT);
    info.appendChild(winRate);
    info.appendChild(cost);
    div.appendChild(cards);
    div.appendChild(info);
    document.body.getElementsByClassName('decks')[0].appendChild(div);
}