document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bar').addEventListener('click', function() {
        var navbar = document.getElementById('navbar');
        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        } else {
            navbar.classList.add('show');
        }
    });

    document.getElementById('close').addEventListener('click', function() {
        document.getElementById('navbar').classList.remove('show');
    });
});
