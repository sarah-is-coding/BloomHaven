document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;

            // Highlight the active navbar item based on the current page
            const currentPath = window.location.pathname.split('/').pop();
            const navbarLinks = document.querySelectorAll('#navbar li a');
            navbarLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPath) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        });
});
