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

const compareInput = document.getElementById("Compare-at");

CompareBtn.onclick = () =>{
   priceDropdown.classList.remove("hidden");
    priceButtons.classList.add("hidden");
    priceBtn.style.rotate = "180deg";

    compareInput.focus();
}

const totalAmountInput = document.querySelector('#toal-amount');

const UnitPriceBtn = document.getElementById("Unit-price-btn")

UnitPriceBtn.onclick = () => {
    priceDropdown.classList.remove("hidden");
    priceButtons.classList.add("hidden");
    unitDropdown.classList.remove("hidden"); 
      priceBtn.style.rotate = "180deg";
    totalAmountInput.focus();
};



// Inventory Dropdown 

const inventoryDropBtn = document.getElementById("Inventory-dropdrown-btn");
const inventoryDropdown = document.getElementById("Inventory-dropdrown");
const inventoryButtons = document.getElementById("Inventory-btns");


const SKUInput = document.getElementById("SKU");
const barcodeInput = document.getElementById("Barcode");

const skuBtn = document.getElementById("SKU-btn").onclick = () => {

 inventoryDropBtn.style.rotate = "180deg";

inventoryDropdown.classList.remove("hidden");

inventoryButtons.classList.add("hidden");
SKUInput.focus();
}

const barcodeBtn = document.getElementById("barcode-btn").onclick = () => {
inventoryDropdown.classList.remove("hidden");
 inventoryDropBtn.style.rotate = "180deg";
inventoryButtons.classList.add("hidden");
barcodeInput.focus();
}

inventoryDropBtn.onclick = () => {
  inventoryDropBtn.style.rotate = inventoryDropdown.classList.contains("hidden") ? "180deg" : "0deg";
  inventoryDropdown.classList.toggle("hidden");
  inventoryButtons.classList.toggle("hidden");
}
// Shipping dropdown

const ShippingDropBtn = document.getElementById("Shipping-dropdrown-btn");
const ShippingDropdown = document.getElementById("Shipping-dropdrown");
const ShippingButtons = document.getElementById("Shipping-btns");


ShippingDropBtn.onclick = () => {
ShippingDropdown.classList.toggle("hidden");
ShippingDropBtn.style.rotate = ShippingDropdown.classList.contains("hidden") ? "0deg" : "180deg";
ShippingButtons.classList.toggle("hidden");
}


const CountryInput = document.getElementById("Country-region");
const HSInput = document.getElementById("HS-code");


 document.getElementById("country-btn").onclick = () => {

 ShippingDropBtn.style.rotate = "180deg";

ShippingDropdown.classList.remove("hidden");

ShippingButtons.classList.add("hidden");
CountryInput.focus();
}

 document.getElementById("HS-btn").onclick = () => {
ShippingDropdown.classList.remove("hidden");
 ShippingDropBtn.style.rotate = "180deg";
ShippingButtons.classList.add("hidden");
HSInput.focus();
}


// Packaging dropdown

const PackaginInput =  document.getElementById("package");
const packageSubmenu = document.getElementById("package-submenu");

PackaginInput.onclick = () =>{
  packageSubmenu.classList.toggle("hidden");
}



const titleEl = document.getElementById("package-title");
const descEl = document.getElementById("package-desc");


const options = document.querySelectorAll(".package-option");



// select option
options.forEach(option => {
  option.onclick = () => {

    options.forEach(opt => opt.classList.remove("bg-[#F1F1F1]"));

    // 2. ADD ACTIVE STATE TO CLICKED ITEM
  
    option.classList.add("bg-[#F1F1F1]");
    
    const title = option.dataset.title;
    const desc = option.dataset.desc;

    // REPLACE content (not append)
    titleEl.textContent = title;
if(desc){
  descEl.textContent = desc
}else{
  descEl.textContent = "";
}

    packageSubmenu.classList.add("hidden");
  };
});


const addPackageModal = document.getElementById("add-package-modal");

 const AddNewPackage = document.querySelector(".Add-new-package").onclick = () => {
  addPackageModal.classList.remove("hidden");
}

document.querySelectorAll(".cancel-pop-btn").forEach((btn) => {
  btn.onclick = () => {
    addPackageModal.classList.add("hidden");
  }});

// Variant Adding Functionality

const addBtn = document.getElementById('Variant-adding');
const btnText = document.getElementById('Add-Btn-Text');
const container = document.getElementById('Variant-Container');
const template = document.getElementById('Variant-Template');

addBtn.onclick = () => {
    // 1. Clone the HTML from the template
    const clone = template.content.cloneNode(true);

    const newVariant = clone.querySelector('.Variant-Instance');

const optionInput = clone.querySelector('#option-size'); 

    clone.querySelector('.Delete-Btn').onclick = () => {
        newVariant.remove();
        updateBtnText();
    };

  

    container.appendChild(clone);
    updateBtnText();
            optionInput.focus();

};

function updateBtnText() {
    btnText.innerText = container.children.length > 0 
        ? "Add another option" 
        : "Add options like size or colors";
}


// Purchase Option Dropdown 

const  purchaseOptionDropdown = document.querySelector('.purchase-option-dropdown');

const purchaseOptionBtn = document.getElementById("purchase-option-btn"); 
const purchaseOptionMainCard = document.querySelector('.purchase-option-main-card');



purchaseOptionBtn.onclick = () => {
  purchaseOptionDropdown.classList.toggle("hidden");
}


const purchaseOptions = document.querySelectorAll('[data-option]');

purchaseOptions.forEach((item) =>{

  item.onclick = () => {

  let  option = item.getAttribute("data-option");

  let card = document.querySelector(
    `[data-option="${option}-card"]`
  )
if(card){
  
  card.classList.remove("hidden");
  
    purchaseOptionDropdown.classList.add("hidden");
    purchaseOptionMainCard.classList.remove("hidden");
    
}
  }


})

document.querySelectorAll('.purchase-cross-btn').forEach(btn => {

  btn.onclick = () => {
  
    const card = btn.closest('[data-option$="-card"]');
    if(card) card.classList.add('hidden');

    const anyVisible = document.querySelector('[data-option$="-card"]:not(.hidden)');
    if(!anyVisible){

      purchaseOptionMainCard.classList.add('hidden');
    }
  }

})


const Editbtn = document.getElementById("edit-btn")
const EditDropdown =  document.getElementById("edit-dropdown")
const editSecLine=  document.getElementById("edit-sec-line")

Editbtn.onclick = () =>{
  editSecLine.classList.toggle("hidden")
  EditDropdown.classList.toggle("hidden")

}