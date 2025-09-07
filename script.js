function AnimationSetter(){
    gsap.set("#nav a",{y:"-100%",opacity:0});
    gsap.set("#home span .child",{y:"100%"})
    gsap.set("#home .row img",{opacity:0})

    gsap.set(".visual-text", {
  opacity: 0,
  strokeDasharray: 500,
  strokeDashoffset: 500,
  fill: "transparent",
  strokeWidth: 2
});
    

}

const LoaderAnimation=()=>{
    const t2 = gsap.timeline(); 
t2 
.from("#loader .child span", {     
    delay: 1,     
    stagger:.2,     
    duration: 1,     
    x: 100,     
    ease: "Power3.easeInOut" 
}) 
.to("#loader .parent .child", {     
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
    delay:-0.5,
    onComplete(){
        animateHomepage()
    }

  

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
// function animateSvg(){
//     document.querySelectorAll("Visual>g").forEach(e=>{
//         e.childNodes[1].childNodes[1].style.strokeDasharray=e.childNodes[1].childNodes[1].getTotalLength()+"px";
//         e.childNodes[1].childNodes[1].style.strokeDashoffset=e.childNodes[1].childNodes[1].getTotalLength()+"px";
//     })

//     gsap.to("Visual>g>g>path",{
//         strokeDashOffset:0,
//         strokeDasharray:0,
//         duration:2,
//         ease:expo.easeInOut,
//         delay:2
//     })


// }
function animateSvg(){

  gsap.timeline()
    .to(".visual-text", {
      opacity: 1,
      visibility: "visible",
      duration: "1"
    })
    .to(".visual-text", {
      strokeDashoffset: 0,
      duration: 3,
      ease: "Power3.easeInOut"
    })
    .to(".visual-text", {
      strokeWidth: 0,
      fill: "#19c4ad",
      duration: 0.4,
      ease: Expo.easeInOut
    });

}
function animateHomepage(){
    

    var t1=gsap.timeline()

    t1.to("nav a ",{
        y:0,
        opacity:1,
        stagger:.05,
        ease:Expo.easeInOut,
       
    })
    t1.to("#home .parent .child  ",{
        y:0,
        duration:2,
        stagger:.01,
        ease:Expo.easeInOut,
        
       
    })
     t1.to("#home img ",{
        opacity:1,
        delay:-.5,
        
        ease:Expo.easeInOut,
        OnComplete(){
         animateSvg()
        
       
    }
        
       
    })
}

revealToSpan();
AnimationSetter()  
LoaderAnimation()


// animateSvg()
