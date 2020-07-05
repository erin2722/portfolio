document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  });

function scrolling(n) {
    const w = window.innerHeight;
    let scrollTo;
    if(n===4) {
        scrollTo = (w - (w/6))*n + 350;
    } else {
        scrollTo = (w - (w/6))*n;
    }
    window.scrollTo({
        top: scrollTo,
        left: 0,
        behavior: 'smooth'
    });
}