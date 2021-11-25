import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);
const slider = () => {
    console.log("Slider");
const swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
});
console.log(swiper);
} 

export default slider