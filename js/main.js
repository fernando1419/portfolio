document.addEventListener('DOMContentLoaded', function () {
   // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
   // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
         el.addEventListener('click', function () {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target; // navbarMain
            // console.log(target);
            const menu = document.getElementById(target);
            // console.log(menu);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            menu.classList.toggle('is-active');
         });
      });
   }
});

document.querySelector("#contactform").reset(); // Resets contact form data.

var topArrow = document.querySelector("#top-arrow");

window.onscroll = function () {
   scrollFunction()
};

function scrollFunction() {
   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      topArrow.style.display = "block";
   } else {
      topArrow.style.display = "none";
   }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}
