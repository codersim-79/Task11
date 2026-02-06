document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById("themeToggle");
    const root = document.documentElement;

    // Load saved theme
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        root.setAttribute("data-theme", savedTheme);
    }

    // Toggle theme
    themeToggle.addEventListener("click", () => {

        let currentTheme = root.getAttribute("data-theme");

        if (currentTheme === "dark") {
            root.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        } else {
            root.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }

    });

});


const images = document.querySelectorAll(".gallery img");
const fullscreen = document.getElementById("fullscreen");
const fullImg = document.getElementById("fullImg");
const closeBtn = document.getElementById("closeBtn");

images.forEach(img => {
    img.addEventListener("click", () => {
        fullscreen.style.display = "flex";
        fullImg.src = img.src;
    });
});

closeBtn.onclick = () => {
    fullscreen.style.display = "none";
};

fullscreen.onclick = () => {
    fullscreen.style.display = "none";
};

