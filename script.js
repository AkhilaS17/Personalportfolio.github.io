// Menu open/close
const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  sideMenu.style.right = "0";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.right = "-250px";
});

// Close menu when clicking a link
document.querySelectorAll(".side-menu a").forEach(link => {
  link.addEventListener("click", () => {
    sideMenu.style.right = "-250px";
  });
});

// Scroll to next section when "Check Out" button clicked
document.getElementById("checkOut").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center"
  });
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,  // Show one image at a time
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
