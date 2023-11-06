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
let snkMoney = document.querySelector('.snk-money');
const elModalFree = document.querySelector('.modal-free-text');
const tanlanganMalumot = document.querySelector('.tanlangan-malumot');
const buyDlete = document.querySelector('.buy-station');
const carousel = document.getElementById('myCarousel');
const items = carousel.getElementsByClassName('item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const caruselBtn = document.querySelector('.hero-carusel-btn')
const caruselModal = document.querySelector('.carusel')
const caruselExitBtn = document.querySelector('.carusel-exit-btn')


caruselBtn.addEventListener('click', function(){
    caruselModal.classList.remove('hidden')
    
  })

  caruselExitBtn.addEventListener('click', function(){
    caruselModal.classList.add('hidden')
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

})

snkAdd.addEventListener( 'click', function (e) {
    elModalFree.classList.add('hidden')

    elModalBuy.innerHTML += `
    
<div class="tanlangan-malumot">
<div class="modal-nomlari">
    <div class="modal-texts-flex">
        <img class="modal-img" src="${heroImg}" alt="">
        <div class="modal-texts">
            <p class="modal-nomi">${sneakersText.textContent}</p>
            <div class="modal-flex">
                <p class="modal-kopaytirish">${snkMoney.textContent}*${ElNechtaligi.textContent}</p>
                <span class="modal-narxi">  </span>
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

