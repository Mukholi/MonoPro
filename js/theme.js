//GLOBAL 
const breakPoint_0px = 0;
const breakPoint_767px = 767;

// var mono_pro_component_collage = document.getElementById("mono_pro_component_collage")
// var mono_pro_component_collage_item_grid = mono_pro_component_collage.querySelectorAll(".mono-pro-component-collage-grid")
// var mono_pro_component_collage_item_container = mono_pro_component_collage.querySelectorAll(".mono-pro-component-collage-item-container")
// var mono_pro_component_collage_item_image = mono_pro_component_collage.querySelectorAll(".mono-pro-component-collage-item-image")
// var mono_pro_component_collage_item_image_height = []
// var resizeIsActive = false;

// //CREATE MASONRY LAYOUT
// function createMasonryLayout(){
//     let active_mono_pro_component_collage_item = []
//     for (let counter = 0; counter < mono_pro_component_collage_item_container.length; counter++){
//         if (window.getComputedStyle(mono_pro_component_collage_item_container[counter]).display !== 'none') {
//             active_mono_pro_component_collage_item.push(mono_pro_component_collage_item_container[counter]);
//           }
//     }

//     if(window.innerWidth < breakPoint_767px){
//         let collageColumns = 2
//         for(counter = 0; counter < active_mono_pro_component_collage_item.length; counter++){
//             active_mono_pro_component_collage_item[counter].style.marginTop = "unset"
//             if(counter >= collageColumns){
//                 let elementAbove =  active_mono_pro_component_collage_item[counter - collageColumns].querySelector("img").getBoundingClientRect().bottom
//                 let elementBelow =  active_mono_pro_component_collage_item[counter].querySelector("img").getBoundingClientRect().top
//                 let elementAboveBellowOffset = elementAbove - elementBelow
//                 let elementLeft =  active_mono_pro_component_collage_item[0].querySelector("img").getBoundingClientRect().right
//                 let elementRight =  active_mono_pro_component_collage_item[1].querySelector("img").getBoundingClientRect().left
//                 let elementLeftRightOffset = elementLeft - elementRight
//                 active_mono_pro_component_collage_item[counter].style.marginTop = (elementAboveBellowOffset - elementLeftRightOffset) + "px"
//             }
//         }

//     }
//     else{
//         let collageColumns = 3
//         for(counter = 0; counter < active_mono_pro_component_collage_item.length; counter++){
//             active_mono_pro_component_collage_item[counter].style.marginTop = "unset"
//             if(counter >= collageColumns){
//                 let elementAbove =  active_mono_pro_component_collage_item[counter - collageColumns].querySelector("img").getBoundingClientRect().bottom
//                 let elementBelow =  active_mono_pro_component_collage_item[counter].querySelector("img").getBoundingClientRect().top
//                 let elementAboveBellowOffset = elementAbove - elementBelow
//                 let elementLeft =  active_mono_pro_component_collage_item[0].querySelector("img").getBoundingClientRect().right
//                 let elementRight =  active_mono_pro_component_collage_item[1].querySelector("img").getBoundingClientRect().left
//                 let elementLeftRightOffset = elementLeft - elementRight
//                 active_mono_pro_component_collage_item[counter].style.marginTop = (elementAboveBellowOffset - elementLeftRightOffset) + "px"
//             }
//         }
//     }
// }

// createMasonryLayout()

// window.addEventListener("resize",()=>{
//     createMasonryLayout()
// })

// //HIDE AND UNHIDE COLLAGE ITEMS
// setTimeout(()=>{
//     if (mono_pro_component_selector_child == mono_pro_component_collage){
//         for(let counter = breakPoint_0px; counter < mono_pro_component_selector_list_items.length; counter++){
//             let itemText = mono_pro_component_selector_list_items[counter].querySelector("p").innerText
//             mono_pro_component_selector_list_items[counter].addEventListener("click",()=>{
//                 if(counter == 0){
//                     let allItems = mono_pro_component_selector_child.querySelectorAll(".mono-pro-component-collage-item-container")
//                     for (let counter2 = 0; counter2 < allItems.length; counter2++){
//                         allItems[counter2].style.display = "block"
//                         gsap.from(allItems[counter2].querySelector(".mono-pro-component-collage-item"),{
//                             opacity:0.5,
//                             scale:"1.1",
//                             left: "15%"
//                         })
//                     }
//                     createMasonryLayout()

//                 }
//                 else{
//                     let selectedItems = mono_pro_component_selector_child.querySelectorAll("."+itemText.toLowerCase())
//                     let allItems = mono_pro_component_selector_child.querySelectorAll(".mono-pro-component-collage-item-container")
//                     for (let counter2 = 0; counter2 < allItems.length; counter2++){
//                         allItems[counter2].style.display = "block"
//                         gsap.from(allItems[counter2].querySelector(".mono-pro-component-collage-item"),{
//                             opacity:0.5,
//                             scale:"1.1",
//                             left: "15%"
//                         })

//                     }
//                     for (let counter3 = 0; counter3 < selectedItems.length; counter3++){
//                         let selectedItemChild = selectedItems[counter3].querySelector(".mono-pro-component-collage-item")
//                         selectedItems[counter3].style.display = "none"
//                     }
//                     createMasonryLayout()
//                 }

//             })
//         }
//     }else{}
// },1000)


//PRICING
var mono_pro_component_pricing_item = document.getElementsByClassName("mono-pro-component-pricing-item")
var mono_pro_component_pricing_item_cost = document.getElementsByClassName("mono-pro-component-pricing-item-cost")
var mono_pro_component_pricing_item_cost_figure = document.getElementsByClassName("mono-pro-component-pricing-item-cost-figure")
var mono_pro_component_pricing_item_detail_list = document.getElementsByClassName("mono-pro-component-pricing-item-detail-list")
var mono_pro_component_pricing_item_detail = document.getElementsByClassName("mono-pro-component-pricing-item-detail")
var mono_pro_component_pricing_item_details_icon_offset = document.getElementsByClassName("mono-pro-component-pricing-item-details-icon-offset")
var mono_pro_component_pricing_btn = document.getElementsByClassName("mono-pro-component-pricing-item-link-button")

function pricingItemDetailsOffset(){
    if(mono_pro_component_pricing_item_detail_list){
        for(let counter0 = 0; counter0 < mono_pro_component_pricing_item_detail_list.length; counter0++){
            if(mono_pro_component_pricing_item_detail_list[counter0].getAttribute("data")){

                let data = mono_pro_component_pricing_item_detail_list[counter0].getAttribute("data")
                data = data.toString()
                
                const regex = /{item:"(.*?)",\s*checked:"(.*?)",\s*amount:(\d+)}/g;

                let result = [];
                let match;

                // Loop through matches and extract data
                while ((match = regex.exec(data)) !== null) {
                result.push({
                    item: match[1],
                    checked: match[2] === "false" ? false : match[2] === "true" ? true : null,
                    amount: parseInt(match[3], 10),
                });
                }

                // Convert to JSON
                // console.log(typeof(JSON.stringify(result, null, 2)));  
                result.forEach((dataElement) =>{

                    console.log(`Item: ${dataElement.item}`);
                    console.log(`Checked: ${dataElement.checked}`);
                    console.log(`Amount: ${dataElement.amount}`);
                    console.log('-----------------');

                });
                
                
            }
        }
    }
    for (let counter = 0; counter < mono_pro_component_pricing_item_detail.length; counter++){
        if(mono_pro_component_pricing_item_detail[counter]){
            console.log(mono_pro_component_pricing_item_detail[counter].getBoundingClientRect().width)
            mono_pro_component_pricing_item_details_icon_offset[counter].style.width = ((mono_pro_component_pricing_item_detail[counter].getBoundingClientRect().width)/4)+"px"
        }
    }
}
function initCheckboxIndicator(){
    for(let counter = 0; counter < mono_pro_component_pricing_item_detail.length; counter++){
        if(mono_pro_component_pricing_item_detail[counter]){
            let checkboxIndicator = mono_pro_component_pricing_item_detail[counter].querySelector(".mono-pro-component-pricing-item-details-icon-checkbox-indicator")
            if (mono_pro_component_pricing_item_detail[counter].getAttribute("itemChecked") == "false"){
                checkboxIndicator.style.height = "0%"
            }
        }
    }
}

function pricingItemDetail(){
    for(let counter = 0; counter < mono_pro_component_pricing_item_detail.length; counter++){
        if(mono_pro_component_pricing_item_detail[counter]){
            let checkboxIndicator = mono_pro_component_pricing_item_detail[counter].querySelector(".mono-pro-component-pricing-item-details-icon-checkbox-indicator")
            mono_pro_component_pricing_item_detail[counter].addEventListener("click",()=>{
                // alert(mono_pro_component_pricing_item_detail[counter].getAttribute("itemChecked"))
                if (mono_pro_component_pricing_item_detail[counter].getAttribute("itemChecked") == "true"){

                    gsap.to(checkboxIndicator,{
                        height:"0%"
                    })
                    mono_pro_component_pricing_item_detail[counter].setAttribute("itemChecked","false")
                }
                else if (mono_pro_component_pricing_item_detail[counter].getAttribute("itemChecked") == "false"){
                    gsap.to(checkboxIndicator,{
                        height:"80%",
                        duration:0.5
                    })
                    mono_pro_component_pricing_item_detail[counter].setAttribute("itemChecked","true")
                }
            })
        }
    }
}

function costFigure(){
    for(let counter = 0; counter < mono_pro_component_pricing_item.length; counter++){
        if(mono_pro_component_pricing_item[counter]){
            function calculatePricingFigure(){
                    let children = mono_pro_component_pricing_item[counter].querySelectorAll(".mono-pro-component-pricing-item-detail")
                    if (children){
                        let childrenItemCosts = 0;
                        for(let counter2 = 0; counter2 < children.length; counter2++){
                            if(children[counter2].getAttribute("itemChecked")!="false"){
                                childrenItemCosts += parseInt(children[counter2].getAttribute("itemCost"))
                            }
                        }
                        mono_pro_component_pricing_item_cost_figure[counter].textContent = "x"
                        mono_pro_component_pricing_item_cost_figure[counter].textContent = childrenItemCosts
                    }
            }
            calculatePricingFigure()
            mono_pro_component_pricing_item[counter].addEventListener("click",calculatePricingFigure)
        }
    }
}

initCheckboxIndicator()
pricingItemDetailsOffset()
pricingItemDetail()
costFigure()

window.addEventListener("resize",()=>{
    pricingItemDetailsOffset()
})
