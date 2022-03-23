//Js responsavel pela dinamaca de páginação 

const $slider = document.querySelector('.banner-slider');

new Glider($slider, {
    slidesToShow: 1, 
    slidesToScroll: 1,
    draggable:true, 
    duration: 0.25,
    scrollLock: true,
});

