'use strict';

/*-----------------------------------------*\
  * PRELOAD *
\*-----------------------------------------*/

const preloader = document.getElementById('loader');

window.addEventListener("load", function() {
    setTimeout(() => { 
        preloader.classList.add("loaded");
        document.body.classList.add("loaded");
        setTimeout(function() {
            loader.remove();
        }, 500);
    }, 2000);
});

/*-----------------------------------------*\
  * GALLERY *
\*-----------------------------------------*/

var coll = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


/*-----------------------------------------*\
  * TESTIMONIALS *
\*-----------------------------------------*/

const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
  item.addEventListener('click', () => {
    indicators[currentTestimonial].classList.remove('active');
    wrapper.style.marginLeft = `-${100 * i}%`;
    item.classList.add('active');
    currentTestimonial = i;
  })
})


/*-----------------------------------------*\
  * SLIDESHOW *
\*-----------------------------------------*/


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlide(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}