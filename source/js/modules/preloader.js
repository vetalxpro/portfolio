module.exports = (function () {
    var imgs = [];
    var path;
    $.each($('*'), function () {
        var $this = $(this);
        var background = $this.css('background-image');
        var img = $this.is('img');

        if(background!='none'){
            path = background;
            // path=background.replace('url("')
            imgs.push(path);
        }
        if (img) {
            path = $this.attr('src');
            if(path){
                // imgs.push(path);
            }
        }
    });
    console.log(imgs);


})();