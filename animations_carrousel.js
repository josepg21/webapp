document.addEventListener('DOMContentLoaded', function() {
    const myCarousel = document.getElementById('carouselExampleAutoplaying');
    const dynamicCaption = document.getElementById('dynamicCaption');
    const captionTitle = document.getElementById('captionTitle');
    const captionDescription = document.getElementById('captionDescription');
    let animationTimeout;

    function showInitialText() {
        const activeCarouselItem = myCarousel.querySelector('.carousel-item.active');
        const dataDiv = activeCarouselItem.querySelector('[data-title]');
        captionTitle.textContent = dataDiv.dataset.title;
        captionDescription.textContent = dataDiv.dataset.description;
        dynamicCaption.classList.add('animate-in');
    }

    showInitialText();

    myCarousel.addEventListener('slide.bs.carousel', function(event) {
        dynamicCaption.classList.remove('animate-in');
        dynamicCaption.classList.add('animate-out');

        if (animationTimeout) {
            clearTimeout(animationTimeout);
        }

        animationTimeout = setTimeout(() => {
            dynamicCaption.classList.remove('animate-out');
            const nextCarouselItem = event.relatedTarget;
            const dataDiv = nextCarouselItem.querySelector('[data-title]');
            captionTitle.textContent = dataDiv.dataset.title;
            captionDescription.textContent = dataDiv.dataset.description;
            dynamicCaption.classList.add('animate-in');
        }, 800);
    });
});