module.exports = (function () {
  var slider = $('.slider');
  if (slider.length > 0) {
    var sliderInfo = require('./sliderInfo');
    var flag = true;
    var downCounter = 0;
    var upCounter = 2;
    var awayCounter = 0;
    var downList = slider.find('.slider__preview-list-down');
    var upList = slider.find('.slider__preview-list-up');
    //down items
    var downItems = downList.find('.slider__preview-item');
    //up items
    var upItems = upList.find('.slider__preview-item');
    //all elements
    var length = downItems.length;
    sliderInfo.fill(downItems.eq(0));
    $(downList).on('next', '.active', function (e) {
      sliderInfo.fill(downItems.eq(downCounter));
    });

    slider.on('transitionend', '.away', function (e) {
      e.preventDefault();
      $(this).removeClass('away').trigger('endAway');
    });
    slider.on('endAway', function () {
      awayCounter++;
      if (awayCounter === 2) {
        setTimeout(function () {
          flag = true;
          awayCounter = 0;
        }, 400);
      }
    });

//up
    $('.slider__control_down').on('click', function (e) {
      e.preventDefault();
      var downActive = downItems.filter('.active');
      var upActive = upItems.filter('.active');

      var reqDownItem = downItems.eq(downCounter);
      var reqUpItem = upItems.eq(upCounter);
      //active
      if (flag) {
        flag = false;
        upCounter++;
        downCounter++;
        if (downCounter >= length) {
          downCounter = 0;
        }
        if (upCounter >= length) {
          upCounter = 0;
        }
        downActive.removeClass('active');
        upActive.removeClass('active');
        //away
        downActive.addClass('away');
        upActive.addClass('away');
        //next

        reqDownItem.addClass('active').trigger('next');
        reqUpItem.addClass('active');
      }


    });
    //down
    $('.slider__control_up').on('click', function (e) {
      e.preventDefault();
      var downActive = downItems.filter('.active');
      var upActive = upItems.filter('.active');
      if (flag) {
        flag = false;
        upCounter--;
        downCounter--;
        if (downCounter < 0) {
          downCounter = length - 1;
        }
        if (upCounter < 0) {
          upCounter = length - 1;
        }
        var reqDownItem = downItems.eq(downCounter - 1);
        var reqUpItem = upItems.eq(upCounter - 1);
        //active
        downActive.removeClass('active');
        upActive.removeClass('active');
        //away
        downActive.addClass('away');
        upActive.addClass('away');
        //next
        reqDownItem.addClass('active').trigger('next');
        reqUpItem.addClass('active');
      }

    });


  }


})();