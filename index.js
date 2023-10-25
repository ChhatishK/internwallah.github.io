const menu = document.querySelector("#menu");

function openMenu() {
    menu.style.display = 'flex';
    document.querySelector("#menuBtn").style.display = 'none'
}

function closeMenu() {
    menu.style.display = 'none';
    document.querySelector("#menuBtn").style.display = 'block'
}