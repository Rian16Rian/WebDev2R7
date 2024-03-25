window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var scrollPosition = window.innerHeight + window.scrollY;
    var documentHeight = document.body.offsetHeight;

    // Check if the user has scrolled to the bottom
    if (scrollPosition >= documentHeight) {
        footer.classList.remove('hidden');
    } else {
        footer.classList.add('hidden');
    }
});
