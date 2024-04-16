window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var scrollPosition = window.innerHeight + window.scrollY;
    var documentHeight = document.body.offsetHeight;

    if (scrollPosition >= documentHeight) {
        footer.classList.remove('hidden');
    } else {
        footer.classList.add('hidden');
    }
});
