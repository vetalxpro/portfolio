module.exports = (function () {
  var sidebar = $('.blog__sidebar');
  if (sidebar.length > 0) {
    var windowWidth;
    var isOpen = false;
    var lastId;
    var scrollTop;
    var body = $('body');
    var sidebarTop = sidebar.offset().top;
    var sidebarLinks = sidebar.find('.blog__sidebar-link');
    var scrollItems = sidebarLinks.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

    init();
  }
  function init() {
    initEvents();
  }

  function initEvents() {
    //sidebar toggler click
    sidebar.on('click', function (e) {
      var target = e.target;
      var $this = $(this);
      e.preventDefault();
      if (!$this.hasClass('fixed') && target===$this[0]) {
        toggleMenu();
      }
    });


    //window size
    $(window).on('resize load', function () {
      windowWidth = $(this).width();
      sidebar.removeClass('active');
      if ($(this).width() <= 783) {
        sidebar.removeClass('fixed');
      } else {
        checkSidebarPosition(scrollTop);
      }
      isOpen = false;
    });
    //window scroll
    $(window).on('scroll', function () {
      var $this = $(this);
      scrollTop = $this.scrollTop();
      checkSidebarPosition(scrollTop);
      activateSidebarElems(scrollTop);
      // var jade = scrollItems[scrollItems.length-1][0];
      // console.log(document.documentElement.scrollHeight,$(jade).offset().top,$(jade).height(),$(window).height());
    });

  }

  function checkElem(e) {
    var target = e.target;
    if (isOpen && !sidebar[0].contains(target)) {
      toggleMenu();
    }

  }

  function toggleMenu() {
    if (isOpen) {
      sidebar.removeClass('active');
      body.off('click', checkElem);
    } else {
      sidebar.addClass('active');
      body.on('click', checkElem);
    }
    isOpen = !isOpen;
  }

  function checkSidebarPosition(scrollTop) {
    if (sidebar.hasClass('fixed') && scrollTop < sidebarTop) {
      sidebar.removeClass('fixed');
    } else if (scrollTop > sidebarTop && windowWidth > 783) {
      sidebar.addClass('fixed');
    }
  }

  function activateSidebarElems(scrollTop) {
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < scrollTop+120) {
        return this;
      }
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      sidebarLinks
          .parent().removeClass("active")
          .end()
          .filter("[href='#" + id + "']")
          .parent()
          .addClass("active");
    }
  }

})();