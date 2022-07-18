/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      category1 = document.getElementById('nav-category1'),
      category2 = document.getElementById('nav-category2'),
      category3 = document.getElementById('nav-category3'),
      category4 = document.getElementById('nav-category4'),
      category5 = document.getElementById('nav-category5'),
      category6 = document.getElementById('nav-category6')

/*===== MENU SHOW =====*/
/* Validate If Constant Exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        
    })
}

/*===== MENU HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

if(category1) {
    category1.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

if(category2) {
    category2.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
if(category3) {
    category3.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
if(category4) {
    category4.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
if(category5) {
    category5.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

if(category6) {
    category6.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

