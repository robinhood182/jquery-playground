$(document).ready(function() {
  $('a').click(function(event) {
    alert('As you can see, the link no longer took you to jquery.com');
    event.preventDefault();
    $(this).hide('slow');
  });
  $('.plus').on('click', () => {
    let $num = parseInt($('.num').text());
    $('.num').text($num + 1);
  });
  $('.minus').on('click', () => {
    let $num = parseInt($('.num').text());
    $('.num').text($num - 1);
  });
});