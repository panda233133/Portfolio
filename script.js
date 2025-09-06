const LoaderAnimation=()=>{
    const t2 = gsap.timeline(); 
t2 
.from(".child span", {     
    delay: 1,     
    stagger:.2,     
    duration: 1,     
    x: 100,     
    ease: "Power3.easeInOut" 
}) 
.to(".parent .child", {     
    duration: 1,     
    ease: "circ.inOut",     
    y: "-100%", 
}) // <-- Added missing method call here
.to("#loader", {     
    duration: 1,     
    ease: "circ.inOut",     
    height:0, 
})
.to("#green", {  
    top:0,   
    duration: 1,     
    ease: "circ.inOut",     
    height:"100%", 
    delay:-0.8
})
.to("#green", {     
    duration: 1,     
    ease: "circ.inOut",     
    height:"0%", 
    delay:-0.5

})
}
function revealToSpan(){     
    document.querySelectorAll(".reveal")     
    .forEach((element)=>{         
        const parent = document.createElement("span");         
        parent.classList.add("parent");         
        const child = document.createElement("span");         
        child.classList.add("child");         
        child.innerHTML = element.innerHTML;                           
        element.innerHTML = "";         
        parent.appendChild(child)         
        element.appendChild(parent);                      
    }); 
}  

revealToSpan();  
LoaderAnimation()

