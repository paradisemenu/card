/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
   

/*===== MENU SHOW =====*/
/* Validate If Constant Exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        
    })
}


window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
  });