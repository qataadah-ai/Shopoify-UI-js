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


document.querySelectorAll(".back-to-main").forEach((btn) => {
  btn.onclick = () => {
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


const CompareBtn = document.getElementById("Compare-at-btn")

CompareBtn.onclick = () =>{
   priceDropdown.classList.remove("hidden");
    priceButtons.classList.add("hidden");
}

const totalAmountInput = document.querySelector('#toal-amount');

const UnitPriceBtn = document.getElementById("Unit-price-btn")

UnitPriceBtn.onclick = () => {
    priceDropdown.classList.remove("hidden");
    priceButtons.classList.add("hidden");
    unitDropdown.classList.remove("hidden"); 
  
    totalAmountInput.focus();
};


const inventoryBtn = document.getElementById("Inventory-dropdrown-btn");
const inventoryDropdown = document.getElementById("Inventory-dropdrown");
const inventoryButtons = document.getElementById("Inventory-btns");

inventoryBtn.onclick = () => {
  inventoryBtn.style.rotate = inventoryDropdown.classList.contains("hidden") ? "180deg" : "0deg";
  inventoryDropdown.classList.toggle("hidden");
  inventoryButtons.classList.toggle("hidden");
}