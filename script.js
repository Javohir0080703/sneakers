const elBuyIcon = document.querySelector('.header-buy-btn');
const elModalBuy = document.querySelector('.modal');
const elOverley = document.querySelector('.overlay');
const elPlus = document.querySelector('.snk-plus');
const elMinus = document.querySelector('.snk-minus');
let ElNechtaligi = document.querySelector('.snk-nechtaligi')
let son = parseInt(ElNechtaligi.textContent);
const heroImg = document.querySelector('.hero-img');
const snkAdd = document.querySelector('.snk-add-buy');
const sneakersText = document.querySelector('.sneakers-text');
let snkMoney = document.querySelector('.snk-money-all');
const elModalFree = document.querySelector('.modal-free-text');
const tanlanganMalumot = document.querySelectorAll('.tanlangan-malumot');
const elDelet = document.querySelector('.buy-station')
const carousel = document.getElementById('myCarousel');
const items = carousel.getElementsByClassName('item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const caruselBtn = document.querySelector('.hero-carusel-btn')
const caruselModal = document.querySelector('.carusel')
const caruselExitBtn = document.querySelector('.carusel-exit-btn')
const elHeaderKorzinka = document.querySelector('.header-buy-span')
let korzinka = parseInt(elHeaderKorzinka.textContent)
const responsiveHamburger = document.querySelector('.responsive-hamburger')
const responsiveBox = document.querySelector('.responsiv-box')
const responsivHeaderExit = document.querySelector('.responsiv-header-exit')
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



caruselBtn.addEventListener('click', function () {
  caruselModal.classList.remove('hidden')
  elOverley.style.display = 'block'
})

caruselExitBtn.addEventListener('click', function () {
  caruselModal.classList.add('hidden')
  elOverley.style.display = 'none'
})

elPlus.addEventListener('click', function () {
  son += 1
  ElNechtaligi.textContent = son.toString();
})

elMinus.addEventListener('click', function () {
  son = Math.max(0, son - 1)
  ElNechtaligi.textContent = son.toString();

})

elBuyIcon.addEventListener('click', function () {
  elModalBuy.classList.remove('hidden')
  elOverley.style.display = 'block'
})


elOverley.addEventListener('click', function () {
  elModalBuy.classList.add('hidden')
  elOverley.style.display = 'none'
  caruselModal.classList.add('hidden')
  responsiveBox.style.display = 'none'
})

responsiveHamburger.addEventListener('click', function () {
  responsiveBox.style.display = 'block'
  elOverley.style.display = 'block'
})

responsivHeaderExit.addEventListener('click', function () {
  responsiveBox.style.display = 'none'
  elOverley.style.display = 'none '
})


snkAdd.addEventListener('click', function (e) { 
  elModalFree.classList.add('hidden')
  elHeaderKorzinka.classList.remove('hidden')
  korzinka += 1
  elHeaderKorzinka.textContent = korzinka.toString();
  elModalBuy.innerHTML += `
    
<div class="tanlangan-malumot">
<div class="modal-nomlari">
    <div class="modal-texts-flex">
        <img class="modal-img" src="./img/Rectangle2.png" alt="">
        <div class="modal-texts">
            <p class="modal-nomi">${sneakersText.textContent}</p>
            <div class="modal-flex">
                <p class="modal-kopaytirish">$${snkMoney.textContent} * ${ElNechtaligi.textContent}</p>
                <span class="modal-narxi">$${+snkMoney.textContent * +ElNechtaligi.textContent}</span>
            </div>
        </div>
        <button class="buy-station">
            <img src="./img/Mask2.svg" alt="delete">
        </button>
    </div>
</div>
<div class="buy-check-box">
    <button class="buy-check">  
        Checkout
    </button>
</div>
</div>
    `

  son -= son
  ElNechtaligi.textContent = 0
 
})




function showSlide(index) {
  if (index >= items.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = items.length - 1;
  }

  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove('active');
  }

  items[currentIndex].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  currentIndex--;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  showSlide(currentIndex);
});

showSlide(currentIndex);


