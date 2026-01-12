// Get the main elements
const input = document.getElementById("category");
const dropdown = document.getElementById("category-dropdown");
const mainList = document.getElementById("main-list");

// 1. Toggle the entire dropdown when clicking input
input.onclick = () => {
  dropdown.classList.toggle("hidden");
};

// 2. Click Main Item -> Hide Main List & Show Sub Menu
document.querySelectorAll(".main-li").forEach((li) => {
  li.onclick = () => {
    const targetId = li.getAttribute("data-target"); // "AnimalsPetSupplies"
    const subMenu = document.getElementById(targetId);
    
    mainList.classList.add("hidden");
    subMenu.classList.remove("hidden");
  };
});

// 3. Click Back -> Hide Sub Menu & Show Main List
document.querySelectorAll(".back-to-main").forEach((btn) => {
  btn.onclick = () => {
    // Hide all lists that have the "Back" button (your sub-menus)
    btn.closest('ul').classList.add("hidden");
    mainList.classList.remove("hidden");
  };
});

// 4. Click Final Item -> Put text in Input and Close
// This targets the <li> items that are NOT the back button
document.querySelectorAll("ul[id]:not(#main-list) li:not(#back-to-main)").forEach((item) => {
  item.onclick = () => {
    input.value = item.innerText;
    dropdown.classList.add("hidden");
  };
});