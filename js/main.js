$(document).ready(function () {
  $('.slider').slick({
    arrows: false, //Вкл стрелок
    adaptiveHeight: true, // Адаптивные точки
    fade:true,
    slidesToShow: 2, // Показ  кол-вл слайдов
    slidesToScroll: 1, // Скролл слайдов
    speed: 1000, // Скорость перелистываться анимации
    easing: 'easer', //Анимация перелистыванья
    infinite: true, // Бесконечность слайдера
    autoplay: true, // Авто-переключение
    autoplaySpeed: 1000, // Перелистыванье авто
    initialSlide: 0, // слайд начало
    pauseOnFocus: false, // Пауза при клике на слайд
    pauseOnDotsHover: true, // Пауза при наведении на Dots
    pauseOnHover: true, // Пауза при наведении на слайд
    draggable: true, // Нельзя на ПК! свайпить
    swipe: true, // Нельзя на тачскринах свайпить
    touchThreshold: 7, // Момент перелистыванья
    touchMove: true, // Ручное перелистыванье выкл
    waitForAnimate: true, // Быстрая перекрутка
    centerMode: false, // Центральный слайд
    variableWidth: false, // Авто-Адаптивный слайдер 
    rows: 1, // Колонк
    vertical: false, // Вертикальный слайдер (без использовать с d:block)

  // appendArrows:$('.button-nav') // Расположение стрелок в отдельном меню 
  
  // responsive:[ // брекПоинт и его настройка
  //   {
  //     breakpoint: 500,
  //     settings: {
  //       slidesToShow:2
  //     }
  //   }, {
  //      breakpoint: 900,
  //     settings: {
  //       slidesToShow: 2
  //     }
  //   }
  //   ],
  // mobileFirst: true,// miv-width !
  });
});

$(document).ready(function () {
    $(".header__menu-btn").on('click', function (e) {
      e.praventDefault;
      $(this).toggleClass('header__menu-btn_active');
    });

  });

    $(function () {
    $('.header__hamburger-btn').on('click',function (){
        $('.header__modal').removeClass('header__modal--close');
    })
    $('.modal_menu-close').on('click',function (){
        $('.header__modal').addClass('header__modal--close');
    })
})