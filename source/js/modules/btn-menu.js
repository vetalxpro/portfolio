module.exports=(function(){
  //btn-menu
  var $modal = $('.modal');
  if($modal.length){
    var scrollWidth = window.innerWidth -document.body.offsetWidth;
    var flag=true;
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $('.btn-menu').on('click', function () {
      if(flag){
        flag=false;
        var $btnMenu=$(this);
        // $modalWindow.toggleClass('rubberBand');
        if($btnMenu.hasClass('active')){
          $('body').css({'overflow':'auto','padding-right':0});
          $btnMenu.removeClass('active');
          $modal.addClass('fadeOutRight').one(animationEnd,function(){
            $(this).removeClass('active fadeOutRight');
            flag=true;

          });
        }else{
          $btnMenu.addClass('active');
          $('body').css({'overflow':'hidden','padding-right':scrollWidth+'px'});
          $modal.addClass('active fadeInRight').one(animationEnd,function(){
            $(this).removeClass('fadeInRight');
            flag=true;
          });
        }
      }
    });
    $modal.on('click',function(){
      $('modal__window').toggleClass('rubberBand');
    });
  }
})();