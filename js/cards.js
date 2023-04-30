"use strict"

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    //Переключение row
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "/../xml/cards.xml", false);
    xmlhttp.send();
    let xmlDoc = xmlhttp.responseXML;
    let len = xmlDoc.getElementsByTagName('card').length;
    for (let counter = 0; counter < len; counter++) {
        var xmlcard = xmlDoc.getElementsByTagName('card')[counter].childNodes;
        let xmlimg = document.createElement('img');
        xmlimg.alt = xmlcard[1].innerHTML;
        xmlimg.src = xmlcard[3].innerHTML;
        xmlimg.className = 'card';
        xmlimg.addEventListener('click', ToInform);
        let container = document.getElementsByClassName('cards')[0];
        container.appendChild(xmlimg);
    }
}

function ToInform() {
    let cimg = this;
    let str = cimg.src.split('/')[4];
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "/../xml/cards.xml", false);
    xmlhttp.send();
    let xmlDoc = xmlhttp.responseXML;
    let ncounter;
    let len = xmlDoc.getElementsByTagName('card').length;
    for (let counter = 0; counter < len; counter++) {
        var xmlcard = xmlDoc.getElementsByTagName('card')[counter].childNodes;
        if (xmlcard[3].innerHTML.split('/')[2] == str) {
            ncounter = counter;
            break;
        }
    }
    console.log(ncounter);
    let hc = document.getElementsByClassName('HeadCard');
    let hcimg = hc[0].childNodes[1];
    let current = xmlDoc.getElementsByTagName('card')[ncounter];
    hcimg.src = current.childNodes[3].innerHTML; 
    document.getElementById('cardName').innerHTML = current.childNodes[1].innerHTML;
    document.getElementById('hitpoints').innerHTML = current.childNodes[5].innerHTML;
    document.getElementById('damage').innerHTML = current.childNodes[7].innerHTML;
    document.getElementById('damagepersec').innerHTML = current.childNodes[9].innerHTML;
    document.getElementById('rarityT').innerHTML = current.childNodes[11].innerHTML
    document.getElementById('speed').innerHTML = current.childNodes[13].innerHTML;
    document.getElementById('hspeed').innerHTML = current.childNodes[15].innerHTML;
    document.getElementById('range').innerHTML = current.childNodes[17].innerHTML;
    document.getElementById('targets').innerHTML = current.childNodes[19].innerHTML;
    scroll(0, 0);
}