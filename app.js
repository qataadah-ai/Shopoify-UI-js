// Products Card Data
// const ProductsData = [
//   {
//     id: 1,
//     Product:
//       '3" Airlift High-Waist Polka Dot Short - Black/white 3" Airlift High-Waist Polka Dot Short - Black/white',
//     Status: "Active",
//     Inventory: "Inventory not ranked",
//     Category: null,
//     Channels: 2,
//     Catalogs: 1,
//     image:
//       "https://cdn.shopify.com/s/files/1/0731/4689/2519/files/Main_52f8e304-92d9-4a36-82af-50df8fe31c69_40x40@3x.jpg?v=1742263839 ",
//   },
//   {
//     id: 2,
//     Product:
//       '3" Airlift High-Waist Polka Dot Short - Black/white 3" Airlift High-Waist Polka Dot Short - Black/white',
//     Status: "Archived",
//     Inventory: "Inventory not ranked",
//     Category: null,
//     Channels: 2,
//     Catalogs: 1,
//     image:
//       "https://cdn.shopify.com/s/files/1/0731/4689/2519/files/W3438R_01_b1_s1_a1_1_m77_cfe57ce7-97e1-415b-8c8d-c39ba9c9e038_40x40@3x.jpg?v=1742382850",
//   },
//   {
//     id: 3,
//     Product: "Qazi Qataadah",
//     Status: "Draft",
//     Inventory: "Inventory not ranked",
//     Category: null,
//     Channels: 2,
//     Catalogs: 1,
//     image:
//       "https://cdn.shopify.com/s/files/1/0731/4689/2519/files/W3438R_01_b1_s1_a1_1_m77_cfe57ce7-97e1-415b-8c8d-c39ba9c9e038_40x40@3x.jpg?v=1742382850",
//   },

//   {
//     id: 4,
//     Product: "Afrdi",
//     Status: "Active",
//     Inventory: "Inventory not ranked",
//     Category: null,
//     Channels: 2,
//     Catalogs: 1,
//     image:
//       "https://cdn.shopify.com/s/files/1/0731/4689/2519/files/W3438R_01_b1_s1_a1_1_m77_cfe57ce7-97e1-415b-8c8d-c39ba9c9e038_40x40@3x.jpg?v=1742382850",
//   },

//   {
//     id: 5,
//     Product:
//       '3" Airlift High-Waist Polka Dot Short - Black/white 3" Airlift High-Waist Polka Dot Short - Black/white',
//     Status: "Active",
//     Inventory: "Inventory not ranked",
//     Category: null,
//     Channels: 2,
//     Catalogs: 1,
//     image:
//       "https://cdn.shopify.com/s/files/1/0731/4689/2519/files/W3438R_01_b1_s1_a1_1_m77_cfe57ce7-97e1-415b-8c8d-c39ba9c9e038_40x40@3x.jpg?v=1742382850",
//   },

//   {
//     id: 6,
//     Product:
//       '3" Airlift High-Waist Polka Dot Short - Black/white 3" Airlift High-Waist Polka Dot Short - Black/white',
//     Status: "Draft",
//     Inventory: "Inventory not ranked",
//     Category: null,
//     Channels: 2,
//     Catalogs: 1,
//     image:
//       "https://cdn.shopify.com/s/files/1/0731/4689/2519/files/W3438R_02910_b1_s1_a1_1_m54_40x40@3x.jpg?v=1742382789",
//   },

//   {
//     id: 7,
//     Product:
//       '3" Airlift High-Waist Polka Dot Short - Black/white 3" Airlift High-Waist Polka Dot Short - Black/white',
//     Status: "Active",
//     Inventory: "Inventory not ranked",
//     Category: null,
//     Channels: 2,
//     Catalogs: 1,
//     image:
//       "https://cdn.shopify.com/s/files/1/0731/4689/2519/files/W3438R_02910_b1_s1_a1_1_m54_40x40@3x.jpg?v=1742382789",
//   },
// ];

// // Getting product table body

// const tableBody = document.getElementById("product-table-body");

// // Function for rendering the products

// function renderProducts(data = ProductsData) {
//   // uing map method for rendeing

//   const productCard = data
//     .map((item) => {
//       // Logic for Status Colors
//       let statusClasses = "";
//       if (item.Status === "Active") {
//         statusClasses = "text-[#014b40] bg-[#affebf]";
//       } else if (item.Status === "Draft") {
//         statusClasses = "text-[#003a5a] bg-[#d5ebff]";
//       } else {
//         statusClasses = "text-[#616161] bg-[#E8E8E8]";
//       }

//       return `
//     <div class="group hover:bg-[#f7f7f7] cursor-pointer flex items-stretch bg-white border-b border-gray-300 relative min-w-max">
//       <div class="sticky left-0 z-20 w-[36px] min-w-[36px] bg-white group-hover:bg-[#f7f7f7] p-[6px_6px_6px_12px] flex items-center">
//         <input type="checkbox" class="h-4 w-4 accent-black" />
//       </div>

//       <div class="sticky left-[36px] z-20 w-[52px] min-w-[52px] bg-white group-hover:bg-[#f7f7f7] p-[6px] flex items-center justify-center">
//         <div class="w-[40px] h-[40px] rounded-[6px] border border-[#D3D3D3] bg-white overflow-hidden">
//           <img src=${item.image} alt="" class="w-full h-full object-contain" />
//         </div>
//       </div>

//       <div class="w-[200px] min-w-[200px] p-[6px] flex items-center">
//         <a href="#" class="text-[12px] font-medium text-[#303030] hover:underline leading-[16px]">
//           ${item.Product}
//         </a>
//       </div>

//       <div class="w-[110px] min-w-[110px] p-[6px] flex items-center">
//         <span class="inline-flex items-center text-[12px] font-[550] rounded-[10px] py-[2px] px-[8px] ${statusClasses}">
//           ${item.Status}
//         </span>
//       </div>

//       <div class="w-[191px] min-w-[191px] p-[6px] flex items-center text-[12px] font-[500] text-[#303030]">
//         ${item.Inventory}
//       </div>

//       <div class="w-[110px] flex-1 min-w-[110px] p-[6px] flex items-center text-[12px] text-[#303030]">
//         ${item.Category || ""}
//       </div>

//       <div class="w-[129px] min-w-[129px] p-[6px] flex items-center justify-end text-[12px] text-[#303030] hover:bg-[#EAEAEA] cursor-pointer">
//         <span class="text-[12px] text-gray-800">${item.Channels}</span>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-4 h-4 text-gray-600 transition-all opacity-0 group-hover:opacity-100" fill="currentColor">
//           <path fillRule="evenodd" d="M4.24 6.2a.75.75 0 0 1 1.06.04l2.7 2.908 2.7-2.908a.75.75 0 0 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 0 1 .04-1.06"></path>
//         </svg>
//       </div>

//       <div class="w-[129px] min-w-[129px] p-[6px] flex items-center justify-center text-[12px] text-[#303030] hover:bg-[#EAEAEA] cursor-pointer">
//         ${item.Catalogs}
//       </div>
//         <div class="sticky right-0 z-20 w-[44px] min-w-[44px] bg-white group-hover:bg-[#f7f7f7] p-[6px] flex items-center justify-center">
//         <button type="button" aria-label="Preview on Online Store" class="flex items-center justify-center w-8 h-8 rounded-[10px] hover:bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-4 h-4 text-[#606060]" fill="currentColor">
//             <path fillRule="evenodd" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1.5 0a1.5 1.5 0 1 1-3-.001 1.5 1.5 0 0 1 3 .001"></path>
//             <path fillRule="evenodd" d="M8 2c-2.476 0-4.348 1.23-5.577 2.532a9.3 9.3 0 0 0-1.4 1.922 6 6 0 0 0-.37.818c-.082.227-.153.488-.153.728s.071.501.152.728c.088.246.213.524.371.818.317.587.784 1.27 1.4 1.922 1.229 1.302 3.1 2.532 5.577 2.532s4.348-1.23 5.577-2.532a9.3 9.3 0 0 0 1.4-1.922c.158-.294.283-.572.37-.818.082-.227.153-.488.153-.728s-.071-.501-.152-.728a6 6 0 0 0-.371-.818 9.3 9.3 0 0 0-1.4-1.922c-1.229-1.302-3.1-2.532-5.577-2.532m-5.999 6.002v-.004c.004-.02.017-.09.064-.223.058-.161.15-.369.278-.608a7.8 7.8 0 0 1 1.17-1.605c1.042-1.104 2.545-2.062 4.487-2.062s3.445.958 4.486 2.062c.52.55.912 1.126 1.17 1.605.13.24.221.447.279.608.047.132.06.203.064.223v.004c-.004.02-.017.09-.064.223-.058.161-.15.369-.278.608a7.8 7.8 0 0 1-1.17 1.605c-1.042 1.104-2.545 2.062-4.487 2.062s-3.445-.958-4.486-2.062a7.7 7.7 0 0 1-1.17-1.605a4.5 4.5 0 0 1-.279-.608c-.047-.132-.06-.203-.064-.223"></path>
//           </svg>
//         </button>
//       </div>
//     </div>
//     `;
//     })
//     .join("");

//   tableBody.innerHTML = productCard;
// }

// renderProducts();


// const buttons = document.querySelectorAll(".filter-btn");
// const cards = document.querySelectorAll("[data-category]"); 

// buttons.forEach((btn) => {
  
//   btn.addEventListener("click", (event) => {
//     const selectedStatus = event.currentTarget.dataset.status;
//     buttons.forEach((b) => b.classList.remove("active", "bg-[#e0e0e0]", "font-[600]"));
//     event.currentTarget.classList.add("active", "bg-[#e0e0e0]", "font-[600]");

//     cards.forEach((card) => {
//       const cardCategory = card.getAttribute("data-category");
//       if (selectedStatus === "All") {
//         card.style.display = "flex";
//       } else if (cardCategory === selectedStatus) {
//         card.style.display = "flex";
//       } else {   
//         card.style.display = "none";
//       }
//     });
//   });
// });


const buttons  = document.querySelectorAll(".filter-btn")
const cards =  document.querySelectorAll("[data-category]")

buttons.forEach((btn) =>{
  btn.addEventListener("click",  (event) => {

 let selectedStatus = event.currentTarget.dataset.status

 buttons.forEach((b) => b.classList.remove("bg-[#e0e0e0]"))
 event.currentTarget.classList.add("bg-[#e0e0e0]")

 cards.forEach((card) =>{

  const cardCategory = card.getAttribute("data-category")
  if(selectedStatus === "All" ){
    card.style.display = "flex" 
  }else if(cardCategory === selectedStatus){
           card.style.display = "flex"
  }else {
    card.style.display ="none"
  }
 })
  })
})



let inputContainer = document.querySelector(".input-container");
let searchIcon = document.querySelector(".search-icon");
let TABS = document.querySelector(".Tabs-container")
let rightbutton = document.querySelector(".right-actions")

searchIcon.addEventListener("click", () => {
   rightbutton.classList.add("hidden") 
   inputContainer.classList.remove("hidden");
  TABS.classList.add("hidden"); 
  
});



let cancelBtn = document.querySelector(".cancel-btn")

cancelBtn.addEventListener ( "click" , () => {
  rightbutton.classList.remove("hidden") 
   inputContainer.classList.add("hidden");
  TABS.classList.remove("hidden"); 

})



let SortBtn = document.querySelector(".sort-btn")
let SortMenu = document.querySelector(".Sort-Menu")

SortBtn.addEventListener("click" , () =>{
   SortMenu.classList.toggle("hidden")
   
})

// querySelector picks only the FIRST match
let Channel = document.querySelector(".Channels");
let PopBox = document.querySelector(".cardPopup-box");

Channel.addEventListener("click", () => { 
  PopBox.classList.toggle("hidden");
});


function filterProducts(status) {
  // 1. Get all filter buttons to update their active styling
  // const buttons = document.querySelectorAll('.filter-btn');
  // // 2. Filter the data
  // let filteredData;
  // if (status === 'All') {
  //   filteredData = ProductsData;
  // } else {
  //   filteredData = ProductsData.filter(item => item.Status === status);
  // }
  // 3. Render the table with the new filtered list
  // renderProducts(filteredData);
}


