$(function () {
  const $window = $(window);
  const $header = $('#header');

  gsap.registerPlugin(ScrollTrigger);

  gsap.set($header, { y: 0, autoAlpha: 1 });

  // 마우스 오버했을 때, 서브 메뉴 보이기
  const $menu = $('.gnb > li');
  const $subMenu = $('.gnb .submenu');

  $header.addClass('active');

  $menu.on('mouseenter', function () {
    const menuIdx = $(this).index();
    $menu.removeClass('on').eq(menuIdx).addClass('on');
    $subMenu.find('li').removeClass('on').eq(menuIdx).addClass('on');
    $header.addClass('sub-active');

    $subMenu.stop().fadeIn(200);
  });

  $menu.on('mouseleave', () => {
    $menu.removeClass('on');
    $header.removeClass('sub-active');
    // $header.removeClass('active');
    $subMenu.find('li').removeClass('on');

    $subMenu.stop().fadeOut(200);
  });

  // ScrollTrigger.create({
  //   trigger: '.sub-visual',
  //   // markers: true,
  //   id: 'header-white',
  //   start: 'top 100%',
  //   end: 'bottom 50px',
  //   onLeave: () => $('#header').addClass('whitebg'),
  //   onEnterBack: () => $('#header').removeClass('whitebg'),
  // });

  $('.btn-back').on('click', function () {
    window.location.href = './sub-coexFriends.html';
  });
  const swiper = new Swiper('.friend-info-slide', {
    // Optional parameters
    speed: 500,
    // autoplay: { delay: 500, disableOnInteraction: false },
    // centeredSlides: true,
    spaceBetween: 30,
    slideToClickedSlide: true,
    slidesPerView: 3.5,

    slidesOffsetAfter: 40,

    // And if we need scrollbar
    scrollbar: {
      el: '.shark-scrollbar',
      draggable: true,
      snapOnRelease: true,
    },

    observer: true,
    observeParents: true,
  });

  // footer

  // Family Site
  $('.family-site').on('click', function () {
    $('.family-site > ul').toggle();
  });

  $('.family-site > ul > li').on('click', function () {
    $('.family-site > ul').hide();
  });
});
