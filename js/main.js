function loadingScreen() {
    document.querySelector(".container").style.display = "block";
    document.querySelector("#loading").style.display = "none";
}

function openMenu() {
    let menu = document.querySelector(".mobile-nav");
    let icon = document.querySelector(".menubutton");

    if (menu.style.display == 'flex') {
        menu.style.display = 'none';
        icon.src = './img/icons/menu.svg';
        document.body.style.position = '';
    } else {
        menu.style.display = 'flex';
        icon.src = './img/icons/close.svg';
        document.body.style.position = 'fixed';

    };
}

function lineUnbreaker() {
    let text = document.querySelector("#atordoamento").getElementsByTagName("p");

    // text.innerHTML = .text.innerHTML.replace(/(?:\r\n|\r|\n)/g, '<br>');

    console.log(text[8].innerHTML)
}

lineUnbreaker();