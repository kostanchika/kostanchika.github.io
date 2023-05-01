"use strict"

let xmlhttp2 = new XMLHttpRequest();
xmlhttp2.open("GET", "/../xml/indexB.xml", false);
xmlhttp2.send();
let xmlDoc2 = xmlhttp2.responseXML;
let len2 = xmlDoc2.getElementsByTagName('player').length;
for (let counter = 0; counter < len2; counter++) {
    let xmlplayer = xmlDoc2.getElementsByTagName('player')[counter].childNodes;
    let player = document.createElement('div');
    player.className = 'player';
    let place = document.createElement('div');
    place.className = 'place';
    place.innerHTML = xmlplayer[1].innerHTML;
    let name = document.createElement('span');
    name.className = 'name';
    name.innerHTML = xmlplayer[3].innerHTML;
    let trophies = document.createElement('span');
    trophies.className = 'trophies'
    let img = document.createElement('img');
    img.src = '/imgs/trophey.png';
    trophies.appendChild(img);
    trophies.innerHTML = trophies.innerHTML + xmlplayer[5].innerHTML;
    player.appendChild(place);
    player.appendChild(name);
    player.appendChild(trophies);
    document.body.getElementsByClassName('players')[0].appendChild(player);
}

len2 = xmlDoc2.getElementsByTagName('clan').length;
for (let counter = 0; counter < len2; counter++) {
    let xmlplayer = xmlDoc2.getElementsByTagName('clan')[counter].childNodes;
    let player = document.createElement('div');
    player.className = 'clan';
    let place = document.createElement('div');
    place.className = 'place';
    place.innerHTML = xmlplayer[1].innerHTML;
    let name = document.createElement('span');
    name.className = 'name';
    name.innerHTML = xmlplayer[3].innerHTML;
    let trophies = document.createElement('span');
    trophies.className = 'trophies'
    let img = document.createElement('img');
    img.src = '/imgs/trophey.png';
    trophies.appendChild(img);
    trophies.innerHTML = trophies.innerHTML + xmlplayer[5].innerHTML;
    player.appendChild(place);
    player.appendChild(name);
    player.appendChild(trophies);
    document.body.getElementsByClassName('clans')[0].appendChild(player);
}