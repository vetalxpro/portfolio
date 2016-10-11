'use strict';

module.exports = function () {
  $.gulp.task('copy:image', function () {
    return $.gulp.src(['./source/images/**/*.*', '!./source/images/make-png-sprite/*'], {since: $.gulp.lastRun('copy:image')})
        .pipe($.gulp.dest($.config.root + '/img'));
  });
};
