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


    var modal = document.getElementById('contactInfoModal');

    // Get the <span> element that closes the modal
    var closeBtn = document.getElementsByClassName("close")[0];

    // When the user clicks on the link, open the modal
    document.getElementById("contactsLink").onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
