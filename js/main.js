// script.js
document.addEventListener('scroll', () => {
        const car = document.querySelector('.car');
        const text = document.querySelector('.text');
        const container = document.querySelector('.container');
        
        // Calculate how much the page has been scrolled
        const scrollPosition = window.scrollY;
        
        // Calculate the scroll distance needed to trigger text appearance
        const triggerDistance = container.offsetHeight / 2; // Midpoint for text appearance

        // Add or remove the animation class based on scroll position
        if (scrollPosition % triggerDistance < 50) { // Threshold to trigger animation reset
                car.style.animationPlayState = 'running';
            text.style.opacity = '0'; // Hide text when animation is running
        } else {
                car.style.animationPlayState = 'paused';
            text.style.opacity = '1'; // Show text after animation stops
        }
});
