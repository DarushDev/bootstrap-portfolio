var $grid = $('.portfolio-items').isotope('layout');

$('.portfolio-filter').on( 'click', 'a', function(e) {
    e.preventDefault();
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });

  $('.portfolio-filter li').removeClass('active');
  $(this).closest('li').addClass('active');
});
