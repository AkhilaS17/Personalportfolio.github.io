function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');

    // Show/hide close button when the menu opens
    const closeBtn = document.querySelector('.close-btn');
    if (sidebar.classList.contains('open')) {
        closeBtn.style.display = "block"; // Show close button
    } else {
        closeBtn.style.display = "none";  // Hide close button
    }
}

// Close menu when clicking a menu item
function closeMenu() {
    document.querySelector('.sidebar').classList.remove('open');
    document.querySelector('.close-btn').style.display = "none";
}
