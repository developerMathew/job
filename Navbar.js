// Get all navbar links
const navLinks = document.querySelectorAll('.navbar');

// Add an event listener for each link
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});
