gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();




function cursorEffect(){
   var page1Content = document.querySelector("#page1-content");
   var cursor = document.querySelector("#cursor");
  
  
   page1Content.addEventListener('mousemove', function(dets){
      gsap.to(cursor, {
        x:dets.x,
        y:dets.y
  
      })
   })
  
   page1Content.addEventListener("mouseenter", function(){
     gsap.to(cursor,{
        scale:1,
        opacity:1
     })
  
   })
  
   page1Content.addEventListener("mouseleave", function(){
     gsap.to(cursor,{
        scale:0,
        opacity:0
     })
  
   })
  
  
  
}

cursorEffect()

function page2Animation() {
   gsap.from(".elem h1", {
      y:120,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
         trigger: "#page2",
         scroller: "#main",
         start: "top 47%",
         end: "top 46%",
         // markers: true,
         scrub: 2



      }
   })


}
page2Animation()


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: " .swiper-pagination",
    clickable: true,

  },
  navigation: {
    nextEl : " .swiper-button-next",
    prevEl: " .swiper-button-prev",
  }
})
