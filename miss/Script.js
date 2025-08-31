gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "75% 50%",
        scrub: true,
        markers: true
      }
    });

    tl.to("#perfume", {
      top: "125%",
      left: "15%",
      width:"30%"
    },'rose');

    tl.to("#rose",{
    top:"120%",
    left: "73%",
    
}, 'rose')

    var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "10% 50%",
    scrub: true,
     markers: true,
}})


tl2.to("#perfume",{
    width:"18%",
    top: "230%",
    left: "50%",
},'ros')

tl2.to("#rose",{
    top: "222%",
    left: "40%",
    width:"20%"
    
}, 'ros')

tl2.from(".lavendarbg", {
  y: 200, // slide upward
  rotate: "-90deg",
  opacity: 0,
}, 'ca')

tl2.from("#lavendar", {
  y: 250, // slide upward
 
}, 'ca+=0.3')
tl2.from(".bluebg", {
  y: 200, // slide upward
  rotate: "-90deg",
  opacity: 0,
}, 'ca')

tl2.from("#blue", {
  y: 250, // slide upward
  
}, 'ca+=0.3')




