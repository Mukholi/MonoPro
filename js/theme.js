//GLOBAL 
const breakPoint_0px = 0;
const breakPoint_767px = 767;

var mono_pro_component_collage = document.getElementById("mono_pro_component_collage")
var mono_pro_component_collage_item_grid = mono_pro_component_collage.querySelectorAll(".mono-pro-component-collage-grid")
var mono_pro_component_collage_item_container = mono_pro_component_collage.querySelectorAll(".mono-pro-component-collage-item-container")
var mono_pro_component_collage_item_image = mono_pro_component_collage.querySelectorAll(".mono-pro-component-collage-item-image")
var mono_pro_component_collage_item_image_height = []
var resizeIsActive = false;

//CREATE MASONRY LAYOUT
function createMasonryLayout(){
    let active_mono_pro_component_collage_item = []
    for (let counter = 0; counter < mono_pro_component_collage_item_container.length; counter++){
        if (window.getComputedStyle(mono_pro_component_collage_item_container[counter]).display !== 'none') {
            active_mono_pro_component_collage_item.push(mono_pro_component_collage_item_container[counter]);
          }
    }

    if(window.innerWidth < breakPoint_767px){
        let collageColumns = 2
        for(counter = 0; counter < active_mono_pro_component_collage_item.length; counter++){
            active_mono_pro_component_collage_item[counter].style.marginTop = "unset"
            if(counter >= collageColumns){
                let elementAbove =  active_mono_pro_component_collage_item[counter - collageColumns].querySelector("img").getBoundingClientRect().bottom
                let elementBelow =  active_mono_pro_component_collage_item[counter].querySelector("img").getBoundingClientRect().top
                let elementAboveBellowOffset = elementAbove - elementBelow
                let elementLeft =  active_mono_pro_component_collage_item[0].querySelector("img").getBoundingClientRect().right
                let elementRight =  active_mono_pro_component_collage_item[1].querySelector("img").getBoundingClientRect().left
                let elementLeftRightOffset = elementLeft - elementRight
                active_mono_pro_component_collage_item[counter].style.marginTop = (elementAboveBellowOffset - elementLeftRightOffset) + "px"
            }
        }

    }
    else{
        let collageColumns = 3
        for(counter = 0; counter < active_mono_pro_component_collage_item.length; counter++){
            active_mono_pro_component_collage_item[counter].style.marginTop = "unset"
            if(counter >= collageColumns){
                let elementAbove =  active_mono_pro_component_collage_item[counter - collageColumns].querySelector("img").getBoundingClientRect().bottom
                let elementBelow =  active_mono_pro_component_collage_item[counter].querySelector("img").getBoundingClientRect().top
                let elementAboveBellowOffset = elementAbove - elementBelow
                let elementLeft =  active_mono_pro_component_collage_item[0].querySelector("img").getBoundingClientRect().right
                let elementRight =  active_mono_pro_component_collage_item[1].querySelector("img").getBoundingClientRect().left
                let elementLeftRightOffset = elementLeft - elementRight
                active_mono_pro_component_collage_item[counter].style.marginTop = (elementAboveBellowOffset - elementLeftRightOffset) + "px"
            }
        }
    }
}

createMasonryLayout()

window.addEventListener("resize",()=>{
    createMasonryLayout()
})

//HIDE AND UNHIDE COLLAGE ITEMS
setTimeout(()=>{
    if (mono_pro_component_selector_child == mono_pro_component_collage){
        for(let counter = breakPoint_0px; counter < mono_pro_component_selector_list_items.length; counter++){
            let itemText = mono_pro_component_selector_list_items[counter].querySelector("p").innerText
            mono_pro_component_selector_list_items[counter].addEventListener("click",()=>{
                if(counter == 0){
                    let allItems = mono_pro_component_selector_child.querySelectorAll(".mono-pro-component-collage-item-container")
                    for (let counter2 = 0; counter2 < allItems.length; counter2++){
                        allItems[counter2].style.display = "block"
                        gsap.from(allItems[counter2].querySelector(".mono-pro-component-collage-item"),{
                            opacity:0.5,
                            scale:"1.1",
                            left: "15%"
                        })
                    }
                    createMasonryLayout()

                }
                else{
                    let selectedItems = mono_pro_component_selector_child.querySelectorAll("."+itemText.toLowerCase())
                    let allItems = mono_pro_component_selector_child.querySelectorAll(".mono-pro-component-collage-item-container")
                    for (let counter2 = 0; counter2 < allItems.length; counter2++){
                        allItems[counter2].style.display = "block"
                        gsap.from(allItems[counter2].querySelector(".mono-pro-component-collage-item"),{
                            opacity:0.5,
                            scale:"1.1",
                            left: "15%"
                        })

                    }
                    for (let counter3 = 0; counter3 < selectedItems.length; counter3++){
                        let selectedItemChild = selectedItems[counter3].querySelector(".mono-pro-component-collage-item")
                        selectedItems[counter3].style.display = "none"
                    }
                    createMasonryLayout()
                }

            })
        }
    }else{}
},1000)