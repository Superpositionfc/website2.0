$('form').submit(function(event) {
  if($('.email').val().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    $('.email').prop("disabled", true);
    $('.email').removeClass('error');
    $('.button').addClass('subscribed');
    $('.email').val($('.email').val());
    return true;
  }
  $('.email').addClass('error');
  return false;
});
