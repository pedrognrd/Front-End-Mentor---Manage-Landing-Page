const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".main-menu");

navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible")
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true)
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
});

// Slider
const slider = new A11YSlider(document.querySelector('.slider'), {
   adaptiveHeight: false,
   dots: true,
   arrows: false,
   responsive: {
    480: {
      dots: false, // dots enabled 480px and up
    }
  }
});