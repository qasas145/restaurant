// function SwiperFunction() {
//     const timer=setTimeout(()=>{
//         new Swiper('.review-container', {
//             speed: 600,
//             loop: true,
//             breakpoints :{
//                 778 :{
//                     slidesPerView:3
//                 },
//                 381:{
//                     slidesPerView:2,
//                 },
//             },
//             autoplay: {
//             delay: 5000,
//             disableOnInteraction: false
//             },
//             slidesPerView: 'auto',
//             pagination: {
//             el: '.swiper-pagination',
//             type: 'bullets',
//             clickable: true
//             }
//         });
//     }, 500)
//     return ()=>clearTimeout(timer);
// }
// SwiperFunction();