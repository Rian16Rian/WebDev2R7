document.addEventListener("DOMContentLoaded", function() {
    const categoryButtons = document.querySelectorAll('.buttons button');
    const recipeCards = document.querySelectorAll('.recipe-card');

    console.log(categoryButtons); // Check if buttons are selected
    console.log(recipeCards); // Check if recipe cards are selected

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked'); // Check if event listener is triggered
            const category = this.getAttribute('data-category');
            console.log(category); // Check if category is retrieved correctly
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
