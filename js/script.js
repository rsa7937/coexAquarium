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
  $menu.on('mouseenter', () => {
    $header.addClass('active');
    $subMenu.stop().fadeIn(200);
  });
  $menu.on('mouseleave', () => {
    $header.removeClass('active');
    $subMenu.stop().fadeOut(200);
  });
});
