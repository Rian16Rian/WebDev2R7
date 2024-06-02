document.addEventListener("DOMContentLoaded", function() {
    var contactLink = document.getElementById("contactLink");
    var modal = document.getElementById("contactInfoModal");
    var closeBtn = modal.querySelector(".close");

    contactLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        modal.style.display = "block"; // Display the modal
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
