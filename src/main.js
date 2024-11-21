import './index.css'
import 'flowbite'




function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slider-image');

/**
 * The function checkstyle is responsible for adding or removing the 'activate' class
 * from elements in the sliderImages array based on their position during user scroll.
 * It logs each image and calculates if the image is at least halfway shown and has not
 * yet been scrolled past, adjusting the class accordingly.
 *
 * @return {void} This function does not return a value.
 */
export function checkstyle() {
    console.log(sliderImages)
    sliderImages.forEach (sliderImage => {
        console.log(sliderImage)
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('activate');
        } else {
            sliderImage.classList.remove('activate');
        }
    });
}

window.addEventListener('scroll', debounce(checkstyle));