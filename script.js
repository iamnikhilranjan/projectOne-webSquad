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

    // document.getElementById("signupButton").addEventListener("click", function() {
    //     let loginForm = document.getElementById("loginForm");
    //     if (loginForm.style.display === "none") {
    //       loginForm.style.display = "block";
    //     } else {
    //       loginForm.style.display = "none";
    //     }
    //   });
    
    // scrolling products one
    const productsContainer = document.querySelector('.products');
    const leftArrow = document.querySelector('.left');
    const rightArrow = document.querySelector('.right');
  
    leftArrow.addEventListener('click', function() {
      productsContainer.scrollBy({
        left: -750,
        behavior: 'smooth'
      });
    });
  
    rightArrow.addEventListener('click', function() {
      productsContainer.scrollBy({
        left: 750,
        behavior: 'smooth'
      });
    });

    // scrolling products Two
    const productsTwoContainer = document.querySelector('.productstwo');
    const leftArrowTwo = document.querySelector('.arrowtwo .lefttwo');
    const rightArrowTwo = document.querySelector('.arrowtwo .righttwo');
  
    leftArrowTwo.addEventListener('click', function() {
      productsTwoContainer.scrollBy({
        left: -750,
        behavior: 'smooth'
      });
    });
  
    rightArrowTwo.addEventListener('click', function() {
      productsContainer.scrollBy({
        left: 750,
        behavior: 'smooth'
      });
    });

    //add to cart button to added

    const button = document.querySelector('.one .product .add-to-cart');
    let clickCount = 0;
  
    button.addEventListener('click', function() {
      clickCount++;
  
      if (clickCount === 1) {
        button.style.backgroundColor = 'white';
        button.style.color = '#BF5050';
        button.textContent = 'Added';
      } else if (clickCount === 2) {
        button.style.backgroundColor = '#BF5050';
        button.style.color = 'white';
        button.textContent = 'Add to Cart';
        clickCount = 0; 
      }
    });



});

