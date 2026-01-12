let CategoryDropdown = document.getElementById("category-dropdown");
let CategoryInput = document.getElementById("category");

CategoryInput.addEventListener("click", () => { 
    CategoryDropdown.classList.toggle("hidden");
});

