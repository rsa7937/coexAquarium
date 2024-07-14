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
  //   trigger: '.visual',
  //   // markers: true,
  //   id: 'header-white',
  //   start: 'top 100%',
  //   end: 'bottom 50px',
  //   onLeave: () => $('#header').addClass('whitebg'),
  //   onEnterBack: () => $('#header').removeClass('whitebg'),
  // });

  // footer

  // Family Site
  $('.family-site').on('click', function () {
    $('.family-site > ul').toggle();
  });

  $('.family-site > ul > li').on('click', function () {
    $('.family-site > ul').hide();
  });
});
