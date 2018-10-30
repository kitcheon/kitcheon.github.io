// Script Written By Yong Lin Wang

$('.feature-btn').click(function () {
  var chapter = $(this).attr('data-chapter');
  var feature = $(this).attr('data-feature');
  var info = {
    title: "Not Available",
    desc: "Not Available"
  }
  $('#' + chapter + 'FeatureOverview').addClass('fadeOutUp');
  $.getJSON('/js/features.json', function (data) {
    info = data[feature];
    console.log(chapter,info);
    $('#' + chapter + 'ModalTitle').text(info.title);
    $('#' + chapter + 'ModalContent').text(info.desc);
    setTimeout(function () {
      $('#' + chapter + 'FeatureOverview').hide(function () {
        $('#' + chapter + 'FeatureModal').addClass('v-center');
        $('#' + chapter + 'FeatureModal').removeClass('fadeOutUp');
        $('#' + chapter + 'FeatureModal').removeClass('display-none');
        $('#' + chapter + 'FeatureModal').addClass('fadeInUp');
      })
    }, 750)
  })
});

$('.modal-close').click(function () {
  var chapter = $(this).attr('data-chapter');
  $('#' + chapter + 'FeatureModal').addClass('fadeOutUp');
  setTimeout(function () {
    $('#' + chapter + 'FeatureModal').addClass('display-none');
    $('#' + chapter + 'FeatureOverview').show();
    $('#' + chapter + 'FeatureOverview').removeClass('fadeOutUp');
    $('#' + chapter + 'FeatureOverview').addClass('fadeInUp');
  }, 750)
})

$('.review-intro').waypoint({
  handler: function (direction) {
    $(".carousel-cell").addClass("fadeInRight")
  }
})

$(".read-more").click(function() {
  var target = $(this).attr('data-scroll-to');
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#"+target).offset().top - 100
  }, 1000);
});