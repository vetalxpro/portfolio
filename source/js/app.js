$(document).ready(function () {
    $('.contact__toggler').on('click', function () {
        $this = $(this);
        var contactMenu = $('.contact__menu');
        if ($this.text() === 'Скрыть контакты') {
            $this.text('Показать контакты');
            contactMenu.hide();
        } else {
            $this.text('Скрыть контакты');
            contactMenu.show();
        }

    });
    $('.btn-menu').on('click', function () {
        $(this).toggleClass('btn-menu_active');
        $('.modal').toggleClass('modal_active');
    });

    $('.auth__link,#wellcome').on('click', function (e) {
        $this = $(this);
        $('.flipper').toggleClass('flipper_flip');
        e.preventDefault();
        if ($this.hasClass('auth__link')) {
            $this.hide();
        } else {
            $('.auth__link').show();
        }
    });
});

//sidebar
(function () {
    var body = $('body'),
        toggler = $('.blog__sidebar-toggler'),
        sidebar = $('.blog__sidebar'),
        isOpen = false;

    function init() {
        initEvents();
    }

    function initEvents() {
        toggler.on('click', function (e) {
            e.preventDefault();
            toggleMenu();
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
            sidebar.removeClass('blog__sidebar_active');
            body.off('click', checkElem);
        } else {
            sidebar.addClass('blog__sidebar_active');
            body.on('click', checkElem);
        }
        isOpen = !isOpen;
    }

    init();
})();