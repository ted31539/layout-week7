$(function() {
  console.log('Hello Bootstrap5');
});    
// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,        
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Initialize Swiper AOS
AOS.init({
  // Global settings:  
  once: true, // whether animation should happen only once - while scrolling down
});
