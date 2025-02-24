
// POP UP 



const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}

showMenu('nav-toggle','nav-menu');

gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});

gsap.from(".home-img", {opacity: 0, duration: 2, delay: 1.2, x: 60});

gsap.from(".home-information", {opacity: 0, duration: 3, delay: 1.3, y: 25});
gsap.from(".anime-text", {opacity: 0, duration: 3, delay: 2.3, y: 25, ease: "expo.out", stagger: .3});

gsap.from(".nav-logo", {opacity: 0, duration: 3, delay: 2.2, y: 25, ease: "expo.out"});
gsap.from(".nav-item", {opacity: 0, duration: 3, delay: 2.2, y: 25, ease: "expo.out", stagger: .2});

gsap.from(".home-social", {opacity: 0, duration: 3, delay: 3, y: 25, ease: "expo.out", stagger: .2});



