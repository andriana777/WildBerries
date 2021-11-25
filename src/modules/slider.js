import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const slider = () => {
    console.log("Slider");
const swiper = new Swiper(".swiper-container", {
    loop: true,
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
});
console.log(swiper);
} 

export default slider