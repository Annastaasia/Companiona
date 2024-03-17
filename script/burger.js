
document.querySelectorAll('.menu-items a').forEach(function (link) {
    link.addEventListener('click', function () {
        const menuToggle = document.getElementById('menuToggle');
        if (menuToggle.checked) {
            menuToggle.checked = false;
        }
    });
});

