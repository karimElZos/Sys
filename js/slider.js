$(function () {
    autoplay();
});
var disableAutoPlay = false;
var enableAutoplay = true;
var autoplay = function () {
    setTimeout(function () {
        if (enableAutoplay && !disableAutoPlay) {
            nextSlide(autoplay);
        }
    }, 3500);
};

function nextSlide(cb) {
    var sliderWrapper = $('.slider__warpper');
    var slideActive = sliderWrapper.find('.flex--active');
    if (slideActive.is(':last-child')) {
        var nextSlide = $('.flex__container').first().data('slide');
        ChangeSlide($('.slide-nav[data-slide="' + nextSlide + '"]'));
    } else {
        var nextSlide = slideActive.next().data('slide');
        ChangeSlide($('.slide-nav[data-slide="' + nextSlide + '"]'));
    }
    if (typeof cb === "function") {
        cb();
    }
}

function prevSlide(cb) {
    var sliderWrapper = $('.slider__warpper');
    var slideActive = sliderWrapper.find('.flex--active');
    if (slideActive.is(':first-child')) {
        var prevSlide = $('.flex__container').last().data('slide');
        ChangeSlide($('.slide-nav[data-slide="' + prevSlide + '"]'));
    } else {
        var prevSlide = slideActive.prev().data('slide');
        ChangeSlide($('.slide-nav[data-slide="' + prevSlide + '"]'));
    }
    if (typeof cb === "function") {
        cb();
    }
}
$('.slide-nav').on('click', function (e) {
    e.preventDefault();
    ChangeSlide($(this));
});
$(".slider__navi").hover(function () {
    enableAutoplay = false;
}, function () {
    enableAutoplay = true;
    autoplay();
});

function ChangeSlide(btn) {
    var current = $('.flex--active').data('slide'),
        next = btn.data('slide');
    $('.slide-nav').removeClass('active');
    btn.addClass('active');
    if (current === next) {
        return false;
    } else {
        enableAutoplay = false;
        $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
        $('.flex--active').addClass('animate--end');
        setTimeout(function () {
            $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
            $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
            enableAutoplay = true;
        }, 800);
    }
};

