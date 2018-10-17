

$('.card').click(function(){
    if ($(this).children('.card-inner').css('transform') !== 'none') {
        $(this).children('.card-inner').css('transform','');
    }else {
        $(this).children('.card-inner').css({
            'transform': 'rotateY(180deg)'
        });
    }
});

$('.feature-btn').click(function(){
    $('#chapter2FeatureOverview').addClass('fadeOutUp');
    setTimeout(function() {
        $('#chapter2FeatureOverview').hide(function(){
            $('#chapter2FeatureModal').addClass('v-center');
            $('#chapter2FeatureModal').removeClass('fadeOutUp');
            $('#chapter2FeatureModal').removeClass('display-none');
            $('#chapter2FeatureModal').addClass('fadeInUp');
        })
    }, 750)
});

$('#chapter2ModalClose').click(function(){
    $('#chapter2FeatureModal').addClass('fadeOutUp');
    setTimeout(function() {
        $('#chapter2FeatureModal').addClass('display-none');
        $('#chapter2FeatureOverview').show();
        $('#chapter2FeatureOverview').removeClass('fadeOutUp');
        $('#chapter2FeatureOverview').addClass('fadeInUp');
    }, 750)
})