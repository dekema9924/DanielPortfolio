const hamburger_menu = document.querySelector('.bars');
const mobile_nav = document.querySelector('.mobile-nav');


hamburger_menu.addEventListener('click', function(){
    mobile_nav.classList.toggle('menu-open');
    if(mobile_nav.classList.contains("menu-open")){
        console.log("open");
        // hamburger_menu.classList.add('change-menu')
        hamburger_menu.src = "./images/x-solid.svg"

    }else{
        console.log(closed)
        hamburger_menu.src = "./images/bars-solid.svg"


    }
})