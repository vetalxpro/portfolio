'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function() {
    var spriteData = $.gulp.src('./source/images/make-png-sprite/*.png')
      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.sass',
        cssFormat:'sass',
        imgPath:'../img/sprite-png/sprite.png'
    }));
    var imgStream = spriteData.img
        .pipe($.gulp.dest('./source/images/sprite-png'));

    var cssStream = spriteData.css
        .pipe($.gulp.dest('./source/style/sprite-stylesheets'));

    return $.merge(imgStream, cssStream);

  });
};
