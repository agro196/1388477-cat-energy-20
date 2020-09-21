const slider = document.getElementById('slider')
if (slider) {
  const sliderBeforeImg = slider.querySelector('.slider__image--before')
  const sliderAfterImg = slider.querySelector('.slider__image--after')
  const sliderBeforeBtn = slider.querySelector('.slider__button--before')
  const sliderAfterBtn = slider.querySelector('.slider__button--after')
  const sliderToggle = slider.querySelector('.slider__toggle-scale')

  function changePosition(value) {
    sliderBeforeImg.style.clipPath = `inset(0% ${value}% 0% 0%)`
    sliderAfterImg.style.clipPath = `inset(0% 0% 0% ${100 - value}%)`
  }

  sliderBeforeBtn.addEventListener('click', () => {
    sliderToggle.classList.remove('slider__toggle-scale--after')
    changePosition(0)
    if (document.documentElement.clientWidth >= 768) {
      sliderToggle.classList.add('slider__toggle-scale--before')
    }
  })
  sliderAfterBtn.addEventListener('click', () => {
    sliderToggle.classList.add('slider__toggle-scale--after')
    changePosition(100)
    if (document.documentElement.clientWidth >= 768) {
      sliderToggle.classList.remove('slider__toggle-scale--before')
    }
  })
}

const navMain = document.querySelector('.main-nav')
const navToggle = document.querySelector('.main-nav__toggle')

navMain.classList.remove('main-nav--nojs')

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed')
    navMain.classList.add('main-nav--opened')
  } else {
    navMain.classList.add('main-nav--closed')
    navMain.classList.remove('main-nav--opened')
  }
})

ymaps.ready(init)
function init() {
  var myMap = new ymaps.Map('map', {
    center: [59.938999, 30.3255],
    zoom: 17,
  })
  myPlacemarkWithContent = new ymaps.Placemark(
    [59.938784, 30.323126],
    {
      hintContent: 'Собственный значок метки с контентом',
      balloonContent: 'Ул. Большая Конюшенная 19/8, Санкт-Петербург',
    },
    {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-pin.png',
      // Размеры метки.
      iconImageSize: [124, 106],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-35, -140],
      // Смещение слоя с содержимым относительно слоя с картинкой.
    },
  )

  myMap.geoObjects.add(myPlacemarkWithContent)
}
