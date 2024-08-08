//GLOBAL 
const breakPoint_0px = 0;
const breakPoint_767px = 767;

var mono_pro_component_collage = document.getElementById("mono-pro-component-collage")
var mono_pro_component_collage_item_container = mono_pro_component_collage.querySelectorAll(".mono-pro-component-collage-item-container")
var mono_pro_component_collage_item_image = mono_pro_component_collage.querySelectorAll(".mono-pro-component-collage-item-image")
var mono_pro_component_collage_item_image_height = []
var resizeIsActive = false;


//GET ALL COLLAGE IMAGE HEIGHT

function alignCollageItem(){
    setTimeout(()=>{
        for (let counter = 0; counter < mono_pro_component_collage_item_image.length; counter++){
            mono_pro_component_collage_item_image_height.push(mono_pro_component_collage_item_image[counter].clientHeight)
        }
        if(window.innerWidth < breakPoint_767px){
            let internalCounterOffset = 2
            for (let counter = 0; counter < mono_pro_component_collage_item_image.length; counter++){
                if (counter >= internalCounterOffset){
                    setTimeout(()=>{
                        let leftMarker = mono_pro_component_collage_item_image[1].getBoundingClientRect().left
                        let rightMarker = mono_pro_component_collage_item_image[0].getBoundingClientRect().right
                        let topMarker = mono_pro_component_collage_item_image[counter - internalCounterOffset].getBoundingClientRect().bottom
                        let bottomMarker = mono_pro_component_collage_item_image[counter].getBoundingClientRect().top
                        mono_pro_component_collage_item_container[counter].style.marginTop = "-"+((bottomMarker-topMarker)-(leftMarker-rightMarker))+"px"
                    },500)
                }
            }
        }
        else{
            let internalCounterOffset = 3
            for (let counter = 0; counter < mono_pro_component_collage_item_image_height.length; counter++){
                if (counter >= internalCounterOffset){
                    setTimeout(()=>{
                        let leftMarker = mono_pro_component_collage_item_image[1].getBoundingClientRect().left
                        let rightMarker = mono_pro_component_collage_item_image[0].getBoundingClientRect().right
                        let topMarker = mono_pro_component_collage_item_image[counter - internalCounterOffset].getBoundingClientRect().bottom
                        let bottomMarker = mono_pro_component_collage_item_image[counter].getBoundingClientRect().top
                        mono_pro_component_collage_item_container[counter].style.marginTop = "-"+((bottomMarker-topMarker)-(leftMarker-rightMarker))+"px"
                    },500)
                }
            }
    
        } 
        resizeIsActive = false 
        console.log("resized")
    },500)
}

alignCollageItem()
window.addEventListener('resize', ()=>{
    resizeIsActive = true;
    setTimeout(()=>{resizeIsActive = false},2000)
    resizeTimeout = setTimeout(alignCollageItem(),4000)
    for (let counter = 0; counter < mono_pro_component_collage_item_image.length; counter++){
        mono_pro_component_collage_item_container[counter].style.marginTop = "unset";
    }
    if(resizeIsActive){
        clearTimeout(resizeTimeout)
    }

})