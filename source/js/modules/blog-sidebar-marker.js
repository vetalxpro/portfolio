module.exports = function () {
  var $sidebar = $('.blog__sidebar');
  if ($sidebar.length > 0) {
    init();
  }
  var lastId;
  var scrollTop;
  var sidebarLinks = $sidebar.find('.blog__sidebar-link');
  var scrollItems = sidebarLinks.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });


  function init() {
    initEvents();
  }

  function initEvents() {
    $(window).on('scroll', function () {
      var $this = $(this);
      scrollTop = $this.scrollTop();
      activateSidebarElems(scrollTop);
      // console.log($this.scrollHeight);
    });

  }

  function activateSidebarElems(scrollTop) {
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < scrollTop + 120) {
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
};