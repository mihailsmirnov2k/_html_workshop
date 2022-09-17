// Сразу создаём переменные
let navbar = document.getElementById('navbar').classList
let active_class = "navbar_scrolled"

/**
 * Слушаем событие прокрутки
 */
window.addEventListener('scroll', e => {
  if(pageYOffset > 500) navbar.add(active_class)
  else navbar.remove(active_class)
})

const button = document.querySelector('.btn')
const form   = document.querySelector('.form')

button.addEventListener('click', function() {
   form.classList.add('form--no') 
});


// location buttun

function showPosition() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var positionInfo = "Your current position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
      document.getElementById("result").innerHTML = positionInfo;
    });
  } 
  else {
    alert("Sorry, your browser does not support HTML5 geolocation.");
  }
}

//Drag and drop

         function dragStart(ev) {
            ev.dataTransfer.effectAllowed='move';
            ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
            ev.dataTransfer.setDragImage(ev.target,0,0);
            return true;
         }
         function dragEnter(ev) {
            event.preventDefault();
            return true;
         }
         function dragOver(ev) {
            return false;
         }
         function dragDrop(ev) {
            var src = ev.dataTransfer.getData("Text");
            ev.target.appendChild(document.getElementById(src));
            ev.stopPropagation();
            return false;
         }