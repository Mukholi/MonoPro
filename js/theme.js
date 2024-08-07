//GLOBAL 
const breakPoint_0px = 0;
const breakPoint_767px = 767;

var mono_pro_component_collage = document.getElementById("mono-pro-component-collage")
var mono_pro_component_collage_item_container = mono_pro_component_collage.querySelectorAll(".mono-pro-component-collage-item-container")
var mono_pro_component_collage_item_image = mono_pro_component_collage.querySelectorAll(".mono-pro-component-collage-item-image")
var mono_pro_component_collage_item_image_height = []
let maxHeightLog = [];


//GET ALL COLLAGE IMAGE HEIGHT

function alignCollageItem(){
    let heightCursor = 0;
    for (let counter = 0; counter < mono_pro_component_collage_item_image.length; counter++){
        mono_pro_component_collage_item_image_height.push(mono_pro_component_collage_item_image[counter].naturalHeight)
    }
    if(window.innerWidth < breakPoint_767px){

    }
    else{
        let mono_pro_component_collage_item_image_height_max = []
        for(let counter = 0; counter < mono_pro_component_collage_item_image_height.length; counter++ ){
            if ( mono_pro_component_collage_item_image_height[counter] > heightCursor){
                heightCursor =  mono_pro_component_collage_item_image_height[counter]
            }else{}
            for(let counter2 = 0; counter2 < mono_pro_component_collage_item_image_height.length / 2; counter2++){
                if(mono_pro_component_collage_item_image_height[counter] > heightCursor){
                    heightCursor = mono_pro_component_collage_item_image_height[counter]
                    maxHeightLog.push(mono_pro_component_collage_item_image_height[counter])
                }else{}
            }
        }
        for(let counter = 0; counter < mono_pro_component_collage_item_container.length; counter++ ){
        }
        console.log(maxHeightLog[0])
    }
}

alignCollageItem()