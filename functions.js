
function mainImg(e) {
    document.querySelector('.coffeeImg').src = e;
}

function toggleMenu() {
    let menuToggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.nav');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}