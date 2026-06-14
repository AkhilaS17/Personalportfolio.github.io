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

document.querySelectorAll(".side-menu a").forEach(link => {
  link.addEventListener("click", () => {
    sideMenu.style.right = "-250px";
  });
});

// Check Out Button
document.getElementById("checkOut").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
});

// HydroMorph Slider
new Swiper(".hydroSwiper", {
  loop: true,
  navigation: {
    nextEl: ".hydro-next",
    prevEl: ".hydro-prev",
  },
});

// Fraud Slider
new Swiper(".fraudSwiper", {
  loop: true,
  navigation: {
    nextEl: ".fraud-next",
    prevEl: ".fraud-prev",
  },
});