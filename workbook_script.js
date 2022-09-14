// integers
let navbar = document.getElementById('navbar').classList
let active_class = "navbar_scrolled"

/**
 * scroll nav
 */
window.addEventListener('scroll', e => {
    if (pageYOffset > 500) navbar.add(active_class)
    else navbar.remove(active_class)
})

const button = document.querySelector('.btn')
const form = document.querySelector('.form')

button.addEventListener('click', function () {
    form.classList.add('form--no')
});


// location buttun

function showPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var positionInfo = "Your current position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
            document.getElementById("result").innerHTML = positionInfo;
        });
    }
    else {
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }
}
