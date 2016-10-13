module.exports = function () {
  var path;
  var imgsTotal;
  var imgs = [];
  var percentsTotal = 1;
  var $preloader = $('.preloader');
  var $preloaderPercents = $('.preloader__percents');
  $.each($('*'), function () {
    var $this = $(this);
    var background = $this.css('background-image');
    var img = $this.is('img');

    if (background.indexOf('url')>-1){
      path = background.slice(5, -2);
      imgs.push(path);
    }
    if (img) {
      path = $this.attr('src');
      if (path) {
        imgs.push(path);
      }
    }
  });
  imgsTotal = imgs.length;

  imgs.forEach(function (item, i, array) {
    var $image = $('<img>', {
      attr: {
        src: array[i]
      }
    });
    $image.on({
      load: function () {
        setPercents(imgsTotal,percentsTotal);
        percentsTotal++;

      },
      error: function () {
        percentsTotal++;
        setPercents(imgsTotal,percentsTotal);
      }
    });
  });
  function setPercents(total, current) {
    var percent = Math.ceil(current / total * 100);
    if (percent >= 100) {
      $preloader.fadeOut();
    }
    $preloaderPercents.text(percent+'%');
  }


};