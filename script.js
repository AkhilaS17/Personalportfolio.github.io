=// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Menu elements
  const menuBtn = document.querySelector(".menu-btn");
  const sideMenu = document.getElementById("sideMenu");
  const closeBtn = document.querySelector(".close-btn");

  // Open side menu
  menuBtn.addEventListener("click", () => {
    sideMenu.style.right = "0";
  });

  // Close side menu
  closeBtn.addEventListener("click", () => {
    sideMenu.style.right = "-250px";
  });
  // Close menu when clicking a link
  document.querySelectorAll(".side-menu a").forEach(link => {
    link.addEventListener("click", () => {
      sideMenu.style.right = "-250px";
    });
  });

  // Scroll to next section when "Check Out" button is clicked
  const checkOutBtn = document.getElementById("checkOut");
  if (checkOutBtn) {
    checkOutBtn.addEventListener("click", () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
