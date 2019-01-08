(function () {
    var burger = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.navlist');
    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();


let whale = document.querySelector("#whale");
whale.addEventListener("click", fade);

function fade() {
    whale.classList.toggle("fade");
}

let mirror = document.querySelector("#mirror");
mirror.addEventListener("click", kick);

function kick() {
    mirror.classList.toggle("kick");
}



