/*hamburger*/

const menuButton = document.querySelector(".menu-button--js");



menuButton.addEventListener("click", () =>{
    const navigation = document.querySelector('.navigation--js')
    navigation.classList.toggle('navigation--open');

});