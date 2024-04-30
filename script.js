document.addEventListener("DOMContentLoaded", function() {
    const dropMenuItems = document.querySelectorAll('.drop-menu-item');

    dropMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            const dropdown = item.querySelector('.dropdown');
            const arrowIcon = item.querySelector('.fa-angle-down');

            dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';

            arrowIcon.classList.toggle('rotate');

            dropMenuItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherDropdown = otherItem.querySelector('.dropdown');
                    const otherArrowIcon = otherItem.querySelector('.fa-angle-down');
                    otherDropdown.style.display = 'none';
                    otherArrowIcon.classList.remove('rotate');
                }
            });
        });
    });

    const toggleMenu = document.querySelector(".toggle-menu");
    const dropMenu = document.querySelector(".drop-menu");

    toggleMenu.addEventListener("click", function() {
        dropMenu.style.display = dropMenu.style.display === "block" ? "none" : "block";
    });
    
});

