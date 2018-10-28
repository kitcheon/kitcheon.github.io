$(window).on('load', function () {
  setTimeout(removeLoader, 800); //wait for page load PLUS two seconds.
});

function removeLoader() {
  $(".loading").fadeOut(500, function () {
    // fadeOut complete. Remove the loading div
    $(".loading").remove(); //makes page more lightweight 
  });
}
