let menuBtn = document.getElementById("menu_btn");
let regisBtn = document.getElementById("regis_btn");
let closeBtn = document.getElementById("close_btn");
let navList = document.getElementById("nav_list");
let cart = document.getElementById("cart_img");
let width = window.innerWidth;
let myAdvert = document.getElementById("myAdvert");

menuBtn.onclick = revealMenu;
closeBtn.onclick = HideMenu;

function revealMenu() {
    if((width <= 1045) && (width > 800) ){
        regisBtn.style = `
        display: block;
        position: absolute;
        top: 70px;
        right: 20px;
    
    `
    } else if ((width <= 800)){
        navList.style = `
        width: 100px;
        display: flex;
        flex-direction: column;
        gap:8px;
        position: absolute;
        top: 100px;
        right: 0;
        background-color: whitesmoke;
        padding: 10px;
    
    `
    regisBtn.style = `
        display: block;
        position: absolute;
        top: 350px;
        right: 0;
        background-color: whitesmoke;
        color:black;
        border-radius:0;
        padding: 0;
        width: 100px;
        height: 40px;
        font-weight: bold;
        cursor: pointer;
    
    `
    cart.style.display = "none";
    }
    closeBtn.style.display = "block";
    menuBtn.style.display = "none";
}

function HideMenu() {
    if(width <= 1045 && width > 800){
        regisBtn.style.display = "none";
    } else if(width <= 800){
        navList.style.display = "none";
        regisBtn.style.display = "none";
    }
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
}

const advs = ["We Give Best lasting Data Quality", "We Give Best Customers support", "We Give Best Business Offers"]
let count = 0;
setInterval(timeChange, 8000)

function timeChange(){
    // while (count >= 0){
    if (count == 0){
        myAdvert.innerHTML = advs[0];
    } else if (count == 1){
        myAdvert.innerHTML = advs[1];
    } else if (count == 2){
        myAdvert.innerHTML = advs[2];
    } else {
        count = 0;
        myAdvert.innerHTML = advs[0];
    }
    console.log(count);
    count++;
// }
};