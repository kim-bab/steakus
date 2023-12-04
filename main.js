
const navGnb = document.querySelector('#header');
const pcGnb = document.querySelectorAll('.hamburger');
const menuWrap = document.querySelector('.gnb');
const mGnb = document.querySelector('.m-hamburger');

window.addEventListener('scroll', () => {
  let scrollValue = document.documentElement.scrollTop;

  if(scrollValue > 200){ //스크롤 값이 200이 넘으면
    navGnb.classList.add('scroll-active'); //css에서 지정한 속성이 보여진다.
  }else{ //스크롤 값이 200이 넘지 않으면
    navGnb.classList.remove('scroll-active'); //css에서 지정한 속성이 사라진다.
  }
})

let currentItem = 0; //변수 지정

mGnb.addEventListener('click', () => { //모바일에서 햄버거 메뉴 클릭하면

  currentItem++; //클릭 횟수만큼 변수가 증가됨

  if(currentItem % 2 == 1){ //변수를 홀수번 클릭하면
    navGnb.classList.add('gnb-active'); //클래스가 추가되어 css에서 스타일한 속성들이 보여진다.
    navGnb.classList.remove('gnb-remove'); //클래스가 삭제되어 css에서 스타일한 속성들이 사라진다.
    setTimeout(()=>{
      menuWrap.classList.add('show');
    }, 800);
    pcGnb.forEach((items) => {
      items.classList.add('bar-active');
    })
  }
  else if(currentItem % 2 == 0){ //변수를 짝수번 클릭하면
    navGnb.classList.remove('gnb-active');
    navGnb.classList.add('gnb-remove');
      menuWrap.classList.remove('show');
    pcGnb.forEach((items) => {
      items.classList.remove('bar-active');
    })
  }
})