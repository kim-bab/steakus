const menuName = [
  {
    id: 1,
    category:'스테이크',
    title: '프라임 스테이크',
    price: 'S 9900, M 12900, L 17900',
    img: 'steak01.png',
    desc: '상위 3% 프라임 등급의 소고기를 사용한 고소한 맛의 스테이크'
  },
  {
    id: 2,
    category:'스테이크',
    title: '부채살 스테이크',
    price: 'S 9900, M 12900, L 17900',
    img: 'steak02.png',
    desc: '부드럽고 씹는 감이 좋은 진한 육향의 스테이크'
  },
  {
    id: 3,
    category:'스테이크',
    title: '채끝 등심 스테이크',
    price: 19900,
    img: 'steak03.png',
    desc: '풍미와 부드러움의 밸런스가 좋은 스테이크'
  },
  {
    id: 4,
    category:'스테이크',
    title: '등심 스테이크',
    price: 19900,
    img: 'steak06.png',
    desc: '상위 3% 프라임 등급의 소고기를 사용한 육즙 가득한 프리미엄 스테이크'
  },
  {
    id: 5,
    category:'스테이크',
    title: '토마호크 스테이크',
    price: 69900,
    img: 'steak04.png',
    desc: '압도적인 사이즈와 풍미를 느낄 수 있는 스테이크'
  },
  {
    id: 6,
    category:'스테이크',
    title: '투움바 쉬림프 스테이크',
    price: 14900,
    img: 'steak05.png',
    desc: '매콤한 투움바 소스와 함께 탱글한 새우와 쫄깃한 스테이크의 식감을 느낄 수 있는 스테이크'
  },
  {
    id: 7,
    category:'필라프&파스타',
    title: '갈릭 스테이크 필라프',
    price: 9900,
    img: 'pilaf1.png',
    desc: '남녀노소 좋아하는 갈릭 소스와 치즈가 어우러진 스테이크 필라프를 철판에서 끝까지 따뜻하게 즐겨보세요.'
  },
  {
    id: 8,
    category:'필라프&파스타',
    title: '감바스 스테이크 필라프',
    price: 9900,
    img: 'pilaf2.png',
    desc: '맛있는 마늘향이 어우러진 감바스 소스에 새우와 스테이크를 곁들인 필라프'
  },
  {
    id: 9,
    category:'필라프&파스타',
    title: '특제 스테이크 필라프',
    price: 9900,
    img: 'pilaf3.png',
    desc: '스테이크어스 특제 소스와 치즈가 어우러진 스테이크 필라프를 철판에서 끝까지 따뜻하게 즐겨보세요.'
  },
  {
    id: 10,
    category:'필라프&파스타',
    title: '투움바 비프 파스타',
    price: 10900,
    img: 'pasta.png',
    desc: '매콤한 투움바 소스와 함께 탱글한 새우와 쫄깃한 스테이크를 같이 곁들인 파스타'
  },
  {
    id: 11,
    category:'사이드',
    title: '사이드 플레터',
    price: 5500,
    img: 'side1.png',
    desc: '시나몬 고구마와 그릴야채를 같이 즐기는 미니플래터'
  },
  {
    id: 12,
    category:'사이드',
    title: '트러플 치즈 포테이토',
    price: 6500,
    img: 'side2.png',
    desc: '트러플향과 치즈가 가득한 감자튀김'
  },
  {
    id: 13,
    category:'사이드',
    title: '트러플 머쉬룸',
    price: 10900,
    img: 'side3.png',
    desc: '트러플향이 가득한 머쉬룸 스프'
  },
  {
    id: 14,
    category:'사이드',
    title: '바질스테이크 샐러드',
    price: 7900,
    img: 'side4.png',
    desc: '샐러드와 스테이크를 함께 즐기는 건강 메뉴'
  },
  {
    id: 15,
    category:'사이드',
    title: '미니김치볶음밥',
    price: 4500,
    img: 'side5.png',
    desc: '허기를 달래 주는 김치 볶음밥'
  },
  {
    id: 16,
    category:'사이드',
    title: '미니볶음밥',
    price: 4500,
    img: 'side6.png',
    desc: '허기를 달래 주는 미니 볶음밥'
  }
]


const showMenubox = document.querySelector('.menubox-wrap');
const showBtnTab = document.querySelectorAll('.btns');
const btnSpan = document.querySelectorAll('.btns span');

const render = (menuName) => {
  let result = '';
  menuName.map((item) => {
    result += `<div class="inner-menubox-wrap">
    <div class="menu-img">
      <img src="img/${item.img}" alt="">
    </div>
    <div class="menubox-txt">
      <h2>${item.title}</h2>
      <h3>${item.desc}</h3>
      <h4>${item.price}원</h4>
    </div>
  </div>`
    
})
showMenubox.innerHTML = result;
  
}

render(menuName);

for(let i=0 ; i<showBtnTab.length ; i++){
  for(let j=0 ; j<=btnSpan.length ; j++){
    showBtnTab[i].addEventListener('click', () => {
      showBtnTab[i].classList.add('btn-active');
      showBtnTab[j].classList.remove('btn-active');
    })
  }
}

showBtnTab.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let data = e.currentTarget.dataset.id;
    let menuData = menuName.filter((menuItems) => {
      if(menuItems.category === data){
        return menuItems;
      }
    })
    if(data == '전체'){
      render(menuName);
    }
    else{
      render(menuData);
    }
  })
})