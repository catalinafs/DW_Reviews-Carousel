// The element containing the id 'CarrouselView' is saved in 'carrouselView'
let carrouselView = document.querySelector('.CarrouselView');

// The width of the element containing the id 'Container Reviews' is stored in 'containerWidth'
let containerWidth = document.querySelector('.ContainerReviews').clientWidth;

// This variable is created to help us count how many reviews there are
let counter = 1;

// This is the time that the 'setInterval' function has to wait before it can execute the 'animation' function again
let time = 1500;

/**
 * This function helps us to add the styles to the elements with certain necessary calculations.
 * It also helps us to determine when the function has gone through all the reviews so that we can restart the count.
 */
function animation() {
    carrouselView.style.transform = 'translate(' + (- containerWidth * counter) + 'px)';
    carrouselView.style.transition = 'transform 1s';
    counter++;

    if(counter === 4) counter = 0
}

/**
 * Here we establish the 'setInterval' function which helps us to execute
 * the 'animation' function every time the time that we already indicated passes.
 */
setInterval(() => {
    animation();
}, time);