function menuchalao(){
var menu = document.querySelector(".bottom-bar__content i")
var cross = document.querySelector("#full i ")

var tl = gsap.timeline()
tl.to("#full",{
right:"0",
duration:0.8,
})

tl.from("#full h4",{
x:130,
duration:0.8,
stagger:0.3,
opacity:0
})

tl.from("#full i",{
opacity:0
})

tl.pause()


menu.addEventListener("click",function(){
 tl.play();
})

cross.addEventListener("click",function(){
 tl.reverse();
  })
}
menuchalao();

  
 gsap.from(".bottom-bar .logo__img",{
  y:-50,
  duration:2,
  opacity:0
 });
  
 gsap.from(".nav li",{
  y:-50,
  duration:3,
  opacity:0,
  ease:"bounce.out",
  stagger:0.3,
 });


 function aboutfunc(){
   gsap.from("#main_about #abt_img1",{
     x:700,
     rotate:360,
    duration:3,
    opacity:.4,
    ease: "bounce.out",
    scrollTrigger:"#main_about #abt_img1"
   });
 }
 aboutfunc()


 gsap.from(".lone",{
  x:-80,
  duration:2,
  scrollTrigger:".lone"
})
 
 gsap.from("#part_six .box",{
  y:20,
  duration:2,
  opacity:0,
  stagger:0.3,
  scrollTrigger:{
    trigger:"#part_six .box",
    scroller:"body",
  }
 });

 function marqueeslides(){
  window.addEventListener("wheel",function(dets){
      if(dets.deltaY>0){
          gsap.to(".mqslider",{
              transform:"translateX(-300%)",
              duration:3,
              repeat:-1,
              ease:"none"
          })
  
          gsap.to(".mqslider img",{
               rotate:180
          })
      }
      else{
         gsap.to(".mqslider",{
            transform:"translateX(0%)",
            duration:3,
            repeat:-1,
            ease:"none"
          })
  
          gsap.to(".mqslider img",{
               rotate:0
          })
      }
   })
}
marqueeslides()

 gsap.from("#part_footer li",{
  y:30,
  duration:1,
  opacity:0,
  stagger:0.3,
  scrollTrigger:"#part_footer li"
 });
 
  
function sheryanimation() {
  Shery.textAnimate("#home-head h1", {
    style: 2,
    y: 10,
    delay: 1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  
  Shery.hoverWithMediaCircle(".pic-container", {
    images: ["https://images.ctfassets.net/pmzhtobns06n/3ONtvIDWHyo8PShhOTZ4jB/f0bdb7c7f76bb94f7bdcb6a713dd767a/_Brandlogos_CDM.jpg?fm=webp&q=80"],
    });
  
  Shery.makeMagnet(".footer_in i" , {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}
sheryanimation()


//  // Locomotive css link
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth: true,
//   lerp:0.02
// });