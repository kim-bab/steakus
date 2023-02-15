
const navGnb = document.querySelector('.nav-wrap');
const pcGnb = document.querySelectorAll('.bar');
const menuWrap = document.querySelector('.gnb');
const mGnb = document.querySelector('.m-bar');
const showSubGnb = document.querySelector('.m-gnb');
const logoChange = document.querySelector('.nav-inner-wrap h1');




const storyWrap = document.querySelector('.story-info-wrap');

window.addEventListener('scroll', () => {
  let scrollValue = document.documentElement.scrollTop;

  if(scrollValue > 200){
    navGnb.classList.add('scroll-active');
  }else{
    navGnb.classList.remove('scroll-active');
  }

console.log(storyWrap.offsetTop - window.innerHeight/3);
  if(scrollValue >= storyWrap.offsetTop - window.innerHeight/3){
    console.log('d');
  }
})

let currentItem = 0;

mGnb.addEventListener('click', () => {

  currentItem++;

  if(currentItem % 2 == 1){ //홀수클릭
    navGnb.classList.add('gnb-active');
    navGnb.classList.remove('gnb-remove');
    setTimeout(()=>{
      menuWrap.classList.add('show');
    }, 800);
    pcGnb.forEach((items) => {
      items.classList.add('bar-active');
    })
  }
  else if(currentItem % 2 == 0){ //짝수클릭
    navGnb.classList.remove('gnb-active');
    navGnb.classList.add('gnb-remove');
      menuWrap.classList.remove('show');
    pcGnb.forEach((items) => {
      items.classList.remove('bar-active');
    })
  }
})


gsap.registerPlugin(ScrollTrigger);

gsap.to('.sub-img', {
  ease: "none",
  yPercent: 10,
  scrollTrigger: {
    trigger: '.sub-img',
    scrub: 0.5,
  },
})