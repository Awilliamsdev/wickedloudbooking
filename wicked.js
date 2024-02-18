let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex + n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(n - 1);
}

  

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (slides.length === 0 || dots.length === 0) {
    return;
  }

  slideIndex = (n + slides.length) % slides.length;

  for (let i = 0; i < slides.length; i++) {

    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
  });