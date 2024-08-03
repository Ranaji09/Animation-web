const scroll = new LocomotiveScroll({
     el: document.querySelector('#main'),
     smooth: true
});
// var a = document.querySelector("#elem1")
// console.log(a)

function page4Animation() {
     var elemC = document.querySelector("#elem-container")
     var fixed = document.querySelector("#fixed-image")
     elemC.addEventListener("mouseenter", function () {
          fixed.style.display = "block"
     })
     elemC.addEventListener("mouseleave", function () {
          fixed.style.display = "none"
     })

     var elems = document.querySelectorAll(".elem")
     elems.forEach(function (e) {
          e.addEventListener("mouseenter", function () {
               var image = e.getAttribute("data-image")
               fixed.style.backgroundImage = `url(${image})`
          })
     })
}

function movingManu(params) {
     var manu = document.querySelector("nav h4")
     var full = document.querySelector("#full-scr")
     var naving = document.querySelector("nav-img")
     var flag = 0;
     manu.addEventListener("click", function () {
          if (flag == 0) {
               full.style.top = 0
               naving.style.opacity = 0
               flag = 1;
          } else {
               full.style.top = "-100%";
               naving.style.opacity = 1
               flag = 0
          }
     })

}

function lod() {
     var loader = document.querySelector("#loader")
     setTimeout(() => {
          loader.style.top = "-100%"
     }, 4000);
}
lod();
swiperAnimation()
page4Animation()
movingManu()

