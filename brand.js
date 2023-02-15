const systemWrap = document.querySelector('.intro-part2');


window.addEventListener('scroll', () => {
  let currentScroll = document.documentElement.scrollTop;
  console.log(currentScroll, systemWrap.offsetTop-window.innerHeight/2);
})

gsap.registerPlugin(ScrollTrigger);

gsap.to('.part2-img', {
  scrollTrigger: {
    trigger: '.part2-desc',
    start: '-50%',
    end: 'center',
    scrub: 0.5,
  },
  width: '100%',
})