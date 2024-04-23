document.addEventListener("DOMContentLoaded", function() {
    const categoryButtons = document.querySelectorAll('.buttons button');
    const recipeCards = document.querySelectorAll('.recipe-card');

    console.log(categoryButtons); 
    console.log(recipeCards); 

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked'); 
            const category = this.getAttribute('data-category');
            console.log(category); 
            filterRecipeCards(category);
            highlightButton(button);
        });
    });

    function filterRecipeCards(category) {
        recipeCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function highlightButton(selectedButton) {
        categoryButtons.forEach(button => {
            button.classList.remove('active');
        });
        selectedButton.classList.add('active');
    }
});

