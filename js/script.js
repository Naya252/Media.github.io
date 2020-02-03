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
let catalogMod = document.getElementById('catalogMod');
let close = document.getElementById('close');
let BlurContent = document.getElementById('BlurContent');

// Открываем модальное окно 
catalogBtn.onclick = function () {
    catalogBtn.setAttribute("href", "#catalogMod"); 
    document.body.style.overflow = "hidden";
    BlurContent.classList.add("blur");
};
// Закрываем модальное окно 
close.onclick = function () {
    catalogBtn.removeAttribute("href"); 
    document.body.style.overflow = null;
    BlurContent.classList.remove("blur");
};


//tooltip info
(function() {
    // Get all the toggletip buttons
    var toggletips = document.querySelectorAll('[data-toggletip-content]');
  
    // Iterate over them
    Array.prototype.forEach.call(toggletips, function (toggletip) {
      // Get the message from the data-content element
      var message = toggletip.getAttribute('data-toggletip-content');
  
      // Get the live region element
      var liveRegion = toggletip.nextElementSibling;
  
      // Toggle the message
      toggletip.addEventListener('click', function () {
          liveRegion.innerHTML = '';
          window.setTimeout(function() {
            liveRegion.innerHTML = '<span class="toggletip-bubble">'+ message +'</span>';
          }, 100);
      });
  
      // Close on outside click
      document.addEventListener('click', function (e) {
        if (toggletip !== e.target) {
          liveRegion.innerHTML = '';
        }                        
      });
  
      // Remove toggletip on ESC
      toggletip.addEventListener('keydown', function (e) {
        if ((e.keyCode || e.which) === 27)
        liveRegion.innerHTML = '';
      });
      
      // Remove on blur
      toggletip.addEventListener('blur', function (e) {
        liveRegion.innerHTML = '';
      });
    });
  }());


  
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


//контакты на мониторах больше 2000px
let contacts__question = document.getElementById("contacts__question");
let contacts__question_wrap = document.getElementById("contacts__question_wrap");
let contacts__desc = document.getElementById("contacts__desc");
let contacts__desc_wrap = document.getElementById("contacts__desc_wrap");

// media query event handler
if (matchMedia) {
    const mq = window.matchMedia("(min-width: 2000px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}
	
// media query change
function WidthChange(mq) {
	if (mq.matches) {
        contacts__question.style.width = "50%";
        contacts__question.style.maxWidth = "5000px";
        contacts__desc.style.width = "50%";
        contacts__desc.style.maxWidth = "5000px";

        contacts__question_wrap.style.maxWidth = "840px";
        contacts__desc_wrap.style.maxWidth = "840px";

	} else {
        contacts__question.style.width = "46%";
        contacts__question.style.maxWidth = "1500px";
        contacts__desc.style.width = "54%";
        contacts__desc.style.maxWidth = "1500px";

        contacts__question_wrap.style.maxWidth = "765px";
        contacts__desc_wrap.style.maxWidth = "915px";

	}	
}

// плавная прокрутка 
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}






