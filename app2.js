// Get the main elements
const input = document.getElementById("category");
const dropdown = document.getElementById("category-dropdown");
const mainList = document.getElementById("main-list");

// 1. Toggle the entire dropdown when clicking input
input.onclick = () => {
  dropdown.classList.toggle("hidden");
};


document.querySelectorAll(".main-li").forEach((li) => {
    li.onclick = () => {
        const targetId = li.getAttribute("data-target"); // "AnimalsPetSupplies"
        const subMenu =  document.getElementById(targetId);
        mainList.classList.add("hidden");
        subMenu.classList.remove("hidden");
    }
})


// 3. Click Back -> Hide Sub Menu & Show Main List
document.querySelectorAll(".back-to-main").forEach((btn) => {
  btn.onclick = () => {
    // Hide all lists that have the "Back" button (your sub-menus)
    btn.closest('ul').classList.add("hidden");
    mainList.classList.remove("hidden");
  };
});


// This targets the <li> items that are NOT the back button
document.querySelectorAll("ul[id]:not(#main-list) li:not(#back-to-main)").forEach((item) => {
  item.onclick = () => {
    input.value = item.innerText;
    dropdown.classList.add("hidden");
  };
});

// Price Dropdown

const priceBtn = document.getElementById("Price-btn-dropdown-icon");
const priceDropdown = document.getElementById("price-dropdown");
const priceButtons = document.getElementById("price-buttons");

priceBtn.onclick=()=>{
    priceBtn.style.rotate = priceDropdown.classList.contains("hidden") ? "180deg" : "0deg";
    priceDropdown.classList.toggle("hidden");
    priceButtons.classList.toggle("hidden");
}

// Unit Price Dropdown

const unitInput = document.getElementById("unit-price");
const unitDropdown = document.getElementById("unit-price-dropdown");
const CancerBtn = document.getElementById("unit-price-cancel-btn");

unitInput.onclick = () =>{
    unitDropdown.classList.remove("hidden");
}
CancerBtn.onclick = ( )=>{
  unitDropdown.classList.add("hidden")
} 


