function ToonMenu() {
    const navLinks = document.querySelector(".nav-links");
    const menuIcon = document.querySelector(".menu-icon");

    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
        menuIcon.src = "/JS-map/iconen/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
    } else {
        navLinks.style.display = "block";
        menuIcon.src = "/JS-map/iconen/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
    }
}
