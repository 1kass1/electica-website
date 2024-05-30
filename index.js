$(function(){
    $('.leftArrow').on('click', function() {
        $('#gallery').removeClass('values').addClass('about');
    });
    $('.rightArrow').on('click', function() {
        $('#gallery').removeClass('about').addClass('values');
    });

    $('#leftReviewArrow').on('click', function(event) {
        if ($(event.target).hasClass('inactive')) {
            return;
        }
        const reviewsContainer = document.getElementById('reviews');
        const offset = reviewsContainer.querySelector('.reviewContainer').offsetWidth;
        reviewsContainer.scrollLeft -= offset + 30;
        $('#rightReviewArrow').removeClass('inactive');
    });

    $('#rightReviewArrow').on('click', function(event) {
        if ($(event.target).hasClass('inactive')) {
            return;
        }
        const reviewsContainer = document.getElementById('reviews');
        const offset = reviewsContainer.querySelector('.reviewContainer').offsetWidth;
        reviewsContainer.scrollLeft += offset + 30;
        $('#leftReviewArrow').removeClass('inactive');
    });

    $('#showMore').on('click', function() {
        $('#reviews .reviewContainer').show();
        $('#showMore').hide();
    })

    $('#open-special-offer, .mobilePromo').on('click', function(){
        $('#special-offer').show();
    });

    $('#special-offer .close').on('click', function(){
        $('#special-offer').hide();
    });
});
