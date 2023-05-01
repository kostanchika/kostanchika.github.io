"use strict"

let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "/../xml/chests.xml", false);
xmlhttp.send();
let xmlDoc = xmlhttp.responseXML;
let len = xmlDoc.getElementsByTagName('chest').length;
for (let counter = 0; counter < len; counter++) {
    let xmlchest = xmlDoc.getElementsByTagName('chest')[counter].childNodes;
    let div = document.createElement('div');
    div.className = 'chest';
    let divimg = document.createElement('div');
    divimg.className = 'chestImg';
    let img = document.createElement('img');
    img.src = xmlchest[1].innerHTML;
    let info = document.createElement('div');
    info.className = 'info';
    let line1 = document.createElement('div');
    line1.className = 'line1';
    let line2 = document.createElement('div');
    line2.className = 'line2';
    let cards = document.createElement('p');
    cards.className = 'cards';
    cards.innerHTML = "Всего карт: ";
    let cardsT = document.createElement('span');
    cardsT.className = 'cardsT';
    cardsT.innerHTML = xmlchest[3].innerHTML;
    let gold = document.createElement('p');
    gold.className = 'gold';
    gold.innerHTML = 'Всего золота: ';
    let goldT = document.createElement('span');
    goldT.className = 'goldT';
    goldT.innerHTML = xmlchest[5].innerHTML;
    let features = document.createElement('p');
    features.className = 'features';
    features.innerHTML = 'Особенности: ';
    let featuresT = document.createElement('span');
    featuresT.className = 'featuresT'
    featuresT.innerHTML = xmlchest[7].innerHTML;
    div.appendChild(divimg);
    divimg.appendChild(img);
    div.appendChild(info);
    info.appendChild(line1);
    line1.appendChild(cards);
    line1.appendChild(gold)
    cards.appendChild(cardsT);
    gold.appendChild(goldT);
    info.appendChild(line2);
    line2.appendChild(features);
    features.appendChild(featuresT);
    document.body.getElementsByClassName('chests')[0].appendChild(div)
}