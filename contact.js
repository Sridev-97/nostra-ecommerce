var offers = document.querySelector(".offers");
var submit = document.getElementById("submit");

document.getElementById("close-offer").addEventListener("click",

    function () {
        offers.style.display = "none"
    }
)

//side Navbar
var sideMenu = document.getElementById("side-nav-show")
var sidenavbar = document.querySelector(".side-nav")

sideMenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0px"
})

document.getElementById("side-nav-hide").addEventListener("click", () => {
    document.querySelector(".side-nav").style.marginLeft = "-60%"
})

submit.addEventListener("click", function(){
    alert('Form Submitted Successfully');
})