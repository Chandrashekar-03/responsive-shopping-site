const navMenu = document.getElementById('nav-menu'),
    navClose = document.getElementById('nav-close'),
    navToggle = document.getElementById('nav-toggle')

    if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu');
        })
    }
    if(navClose){
        navClose.addEventListener('click', ()=>{
            navMenu.classList.remove('show-menu');
        })
    }

//Redirect to another page
function myBtn(){
    window.location.href='./Registration/registration.html';
}
function myBackBtn(){
    window.location.replace='/index.html';
}

// Popup
const popupScreen = document.querySelector('.popup-screen')
const popClose = document.querySelector('.pop-close')

window.addEventListener('load', () =>{
    setTimeout(() =>{
        popupScreen.classList.add("active")
    }, 1500); // popup screen load on 1500 ms in load after page
});

popClose.addEventListener('click', ()=>{
    popupScreen.classList.remove("active")
    //Close the popup screen on click button
    // document.cookie = "WebsiteName=testWebsite; max-age=" + 24 * 60 *60;// 1day = 24 hours = 24*60*60
});

// page offy set
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //When the scroll is higher then 350 viewport height, add
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW CART ===============*/
// const cart = document.getElementById('cart'),
//       cartShop = document.getElementById('cart-shop'),
//       cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
// if(cartShop){
//     cartShop.addEventListener('click', () =>{
//         cart.classList.add('show-cart')
//     })
// }

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
// if(cartClose){
//     cartClose.addEventListener('click', () =>{
//         cart.classList.remove('show-cart')
//     })
// }
