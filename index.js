
//NAVBAR
const hamburger_menu = document.querySelector('.bars');
const mobile_nav = document.querySelector('.mobile-nav');
const link_clicked = document.querySelectorAll('.link-clicked');


hamburger_menu.addEventListener('click', function(){
    mobile_nav.classList.toggle('menu-open');
    if(mobile_nav.classList.contains("menu-open")){
        console.log("open");
        hamburger_menu.src = "./images/x-solid.svg";

    }else{
        console.log(closed)
        hamburger_menu.src = "./images/bars-solid.svg"


    }
})

//close navbar after clicking link
link_clicked.forEach(link => {
    link.addEventListener('click', ()=>{
        console.log('link clicked')
        mobile_nav.classList.remove("menu-open")
        hamburger_menu.src = "./images/bars-solid.svg"
    })
});