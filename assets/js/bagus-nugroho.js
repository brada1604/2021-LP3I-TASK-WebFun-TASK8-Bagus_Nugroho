var slide = 1;

$(document).ready(function(){
	onShow();

	$('.prev-bagus').on('click', function () {
        slide -= 1;
        onShow();
    });

    $('.next-bagus').on('click', function () {
        slide += 1;
        onShow();
    });

    function onShow() {
        var slides = $('.caro-bagus');
        if (slide < 1) { slide = slides.length }
        if (slide > slides.length) { slide = 1 }

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slide - 1].style.display = "block";
    }

});