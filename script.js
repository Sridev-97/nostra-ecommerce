var offers = document.querySelector(".offers");

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

//Image Slider

const images = document.querySelectorAll('.slider-image');
let currentIndex = 0;

function nextImage() {
    //Removes the active class
    images[currentIndex].classList.remove('active');

    //update the Index(also loops)
    currentIndex = (currentIndex + 1) % images.length;

    //add active class
    images[currentIndex].classList.add('active');
}

//Set Interval
setInterval(nextImage, 3000);

//optional Navigation
document.getElementById('slider-left').addEventListener('click', function () {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1) % images.length;// Wrap to last if going left from first
    images[currentIndex].classList.add('active');
});

document.getElementById('slider-right').addEventListener('click', () => {
    nextImage(); // Same logic as automatic
});


// Services
window.addEventListener("scroll", function () {
    var elements = this.document.querySelectorAll(".initial-animate")
    elements.forEach((el) => {
        windowHeight = window.innerHeight
        var elbound = el.getBoundingClientRect()


        console.log(windowHeight)
        console.log(elbound.top)
        if (windowHeight > elbound.top - 100) {
            console.log("Hi")
            el.classList.remove("reveal-animate")

        }
    })
})

//Most Wanted
var likebuttons=document.querySelectorAll(".like")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            e.target.src="./images/icons/love.png"
        }
        else{
            e.target.src="./images/icons/blackheart.png"
        }
    })
})