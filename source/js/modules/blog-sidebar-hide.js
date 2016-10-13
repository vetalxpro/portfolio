module.exports = function () {
  var $sidebar = $('.blog__sidebar');
  var $body = $('body');
  var scrollTop;
  var header = $('.header_blog');

  function toggleMenu() {
    if ($sidebar.hasClass('active')) {
      $sidebar.removeClass('active');
      $body.off('click', checkElem);
    } else {
      $sidebar.addClass('active');
      $body.on('click', checkElem);

    }
  }

  $(window).on('resize', function () {
    checkSidebarPosition(scrollTop);
  });
  $(window).on('scroll', function () {
    scrollTop = $(this).scrollTop();
    checkSidebarPosition(scrollTop);
  });
  function checkElem(e) {
    var target = e.target;
    if (!$sidebar[0].contains(target) && $sidebar.hasClass('active')) {
      toggleMenu();
    }

  }

  function checkSidebarPosition(scrollTop) {
    if (scrollTop < header.height()) {
      $sidebar.removeClass('fixed');
    } else {
      $sidebar.addClass('fixed');
    }
  }

  $sidebar.on('click', function (e) {
    var target = e.target;
    e.preventDefault();
    if (target === $sidebar[0]) {
      toggleMenu();
    }
  });
};