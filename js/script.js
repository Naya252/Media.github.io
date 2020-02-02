// пример карточки товара, при наведении на кнопку
let catalogBtn = document.getElementById('catalogBtn');
let catalogClass = document.getElementById('catalogClass');
let catalogCard = document.getElementById('catalog__card');

catalogCard.onmouseover = function () {   
    catalogClass.style.borderWidth = "1px";
    catalogClass.style.borderStyle = "solid";
    catalogClass.style.borderColor = "#CBA696";
};

catalogCard.onmouseout = function () {
    catalogClass.style.borderWidth = "1px";
    catalogClass.style.borderStyle = "solid";
    catalogClass.style.borderColor = "transparent";
};

//пример модального окна

//tooltip info

//map
var mymap = L.map('mapid').setView([57.757401, 40.986840], 15.5);
var myMarker = L.icon({
    iconUrl: 'img/marker3.png',
    iconSize:     [32, 43], // size of the icon
    iconAnchor:   [12, 55], // point of the icon which will correspond to marker's location
});
var marker = L.marker([57.757401, 40.986840], {icon: myMarker}).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibmF5YTI1MiIsImEiOiJjazY1MWI5ODQwa25jM21vN3dvMnJvbDB4In0.ex-oBkf9ssYk4h-xuua1gg'
}).addTo(mymap);



