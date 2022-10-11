// Meni
var dugme = document.getElementsByTagName('button')[0];
var dugmeSlika = document.getElementById('meni');
var meninav = document.getElementsByClassName('padajuci');
var padajuciMeni = document.getElementById('dropcontent');
var naslov = document.getElementsByTagName('h1')[0];

dugmeSlika.addEventListener('click', meni, false);
function meni() {
  if (padajuciMeni.style.display = 'none') {
    padajuciMeni.style.display = 'block';
    dugmeSlika.style.display = 'none';
    dugme.style.display = 'none';
    // naslov.style.display = 'none';
   
  }
}


// slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
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
