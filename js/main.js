function loadingScreen() {
    document.querySelector(".container").style.display = "block";
    document.querySelector("#loading").style.display = "none";
}

function openMenu() {
    let menu = document.querySelector("nav");
    if (menu.style.display == 'inline-block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'inline-block';
    };
}