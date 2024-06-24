$(function () {
  // 로딩했을 때 보이는 비주얼 애니메이션
  const $header = $('#header');
  const $visualCon = $('.visual-con');
  const $visualImg = $('.visual-con figure img');
  const $visualVideo = $('.visual-con video');

  visualTL = gsap.timeline();
  visualTL.to($visualCon, {
    duration: 2,
    ease: 'power4.inOut',
    '--clip': '-100px round 0px',
  });
  visualTL.from(
    $visualVideo,
    {
      duration: 1.8,
      ease: 'power4.inOut',
      scale: 1.2,
    },
    '<'
  );
  visualTL.from(
    $header,
    {
      duration: 1,
      ease: 'power4.inOut',
      yPercent: -90,
      autoAlpha: 0,
    },
    '-=1.2'
  );
  visualTL.from(
    '.visual-text h2',
    {
      duration: 0.8,
      ease: 'power4.inOut',
      autoAlpha: 0,
      y: 20,
    },
    '-=0.5'
  );
  visualTL.from(
    '.visual-text p',
    {
      duration: 1,
      ease: 'power4.inOut',
      autoAlpha: 0,
      y: 10,
    },
    '-=0.5'
  );

  // 마우스 오버했을 때, 서브 메뉴 보이기
  const $menu = $('.gnb > li');
  const $subMenu = $('.gnb .submenu');

  $menu.on('mouseenter', function () {
    const menuIdx = $(this).index();
    $menu.removeClass('on').eq(menuIdx).addClass('on');
    $subMenu.find('li').removeClass('on').eq(menuIdx).addClass('on');

    $header.addClass('active');
    $subMenu.stop().fadeIn(200);
  });

  $menu.on('mouseleave', () => {
    $menu.removeClass('on');
    $subMenu.find('li').removeClass('on');

    $header.removeClass('active');
    $subMenu.stop().fadeOut(200);
  });

  //  Section 02 : notice 공지 스와이퍼
  const noticeSlide = new Swiper('.notice-slide', {
    speed: 500,
    loop: true,
    loopedSlides: 3,
    direction: 'vertical',

    autoplay: { delay: 2000, disableOnInteraction: false },

    // centeredSlides: true,

    // slideToClickedSlide: true,

    slidesPerView: 1,
    // spaceBetween: 20,
  });

  // Section 03 : Program 날짜 스와이퍼
  const daySlider = new Swiper('.day-slider', {
    speed: 500,
    // loop: true,
    loopedSlides: 6,

    // centeredSlides: true,

    slideToClickedSlide: true,

    slidesPerView: 3,
    spaceBetween: 24,
  });
  // Section 03 : Program 프로그램 스와이퍼
  const programSlider = new Swiper('.program-slide', {
    speed: 500,
    // loop: true,
    loopedSlides: 6,

    // centeredSlides: true,

    slideToClickedSlide: true,

    slidesPerView: 3.5,
    spaceBetween: 24,

    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });
});
