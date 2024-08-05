//GLOBAL 
const breakPoint_0px = 0;
const breakPoint_767px = 767;

var mono_pro_component_selector = document.getElementById("mono-pro-component-selector-x")
var mono_pro_component_selector_item_header = mono_pro_component_selector.querySelector(".mono-pro-component-selector-item-header")
var mono_pro_component_selector_item_header_text = mono_pro_component_selector_item_header.querySelector(".mono-pro-component-selector-item-header-text")
var mono_pro_component_selector_list = mono_pro_component_selector.querySelector(".mono-pro-component-selector-list")
var mono_pro_component_selector_list_items = mono_pro_component_selector_list.querySelectorAll(".mono-pro-component-selector-item")

//Upate Selector Header Text On Load
setTimeout(()=>{
    mono_pro_component_selector_item_header_text.innerText = mono_pro_component_selector_list_items[0].querySelector("p").innerText
    mono_pro_component_selector_list_items[0].classList.add("selector-item-active")
},100)

//Animate In Select Component Options on Mobile
mono_pro_component_selector_item_header.addEventListener("click", ()=>{
    if(mono_pro_component_selector_list.offsetHeight < 10){
        gsap.set(mono_pro_component_selector_list,{
            display:"block",
            height:"100%"
        })
        gsap.to(mono_pro_component_selector_list_items,{
            display:"flex",
            stagger:0.15
        })
        gsap.to(mono_pro_component_selector_list_items,{
            opacity:1,
        })
    }
    else{
        gsap.to(mono_pro_component_selector_list_items,{
            opacity:0,
            stagger:0.15
        })
        gsap.to(mono_pro_component_selector_list_items,{
            display:"none",
        })
        gsap.set(mono_pro_component_selector_list,{
            display:"none",
            height:"0%"
        })
    }
})

//Animate Out Select Component Options on Mobile
mono_pro_component_selector_list.addEventListener("mouseleave",()=>{
    if(parseInt(window.innerWidth) < breakPoint_767px){
        gsap.to(mono_pro_component_selector_list_items,{
            opacity:0,
            stagger:0.15
        })
        gsap.to(mono_pro_component_selector_list_items,{
            display:"none",
        })
        gsap.set(mono_pro_component_selector_list,{
            display:"none",
            height:"0%"
        })
    }
})

//Update Select Component Header Text & Select Current Option
for(let counter = 0; counter < mono_pro_component_selector_list_items.length; counter++){
    mono_pro_component_selector_list_items[counter].addEventListener("click",()=>{
        mono_pro_component_selector_item_header_text.innerText = mono_pro_component_selector_list_items[counter].querySelector("p").innerText
        if( mono_pro_component_selector_list.querySelector(".selector-item-active")){
            mono_pro_component_selector_list.querySelector(".selector-item-active").classList.remove("selector-item-active")
        } else{}
        mono_pro_component_selector_list_items[counter].classList.add("selector-item-active")

        if(mono_pro_component_selector_list.offsetHeight < 10){
            gsap.to(mono_pro_component_selector_list_items,{
                opacity:0,
                stagger:0.15
            })
            gsap.to(mono_pro_component_selector_list_items,{
                display:"none",
            })
            gsap.set(mono_pro_component_selector_list,{
                display:"none",
                height:"0%"
            })
        }
    })
}

//Reset Select Compoent to Default CSS Values on Resize
window.addEventListener('resize', ()=>{
    if( parseInt(window.innerWidth) >= breakPoint_767px){
        mono_pro_component_selector_list.style.opacity = 0;
        mono_pro_component_selector_list.style.display = "flex";
        gsap.set(mono_pro_component_selector_list,{
            display:"flex",
            height:"100%",
            delay:2
        })
        gsap.to(mono_pro_component_selector_list,{
            opacity:1,
            delay:2
        })
        gsap.set(mono_pro_component_selector_list_items,{
            display:"flex",
            opacity:1,
            delay:2,
        })
    }
    else{
        mono_pro_component_selector_list.style.display = "none";

    }

})
