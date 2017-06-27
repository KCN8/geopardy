var $baseURL = "http://jservice.io/api/clues/"

$(window).on('load',function(){
    $('#myModal').modal('show');
});


$('.submitName').click(function (event) {
  event.preventDefault()
  var $playerName = $('.nameInput').val()
  $('#player').append($playerName)
})
$('.nameInput').keyup(function(e){
  e.preventDefault()
  if(e.which == 13) {
    $('.submitName').click();
  }
});

$(document).ready(function() {
    $.get($baseURL).then(function(data) {
    })
})
