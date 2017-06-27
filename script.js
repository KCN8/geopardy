var $baseURL = "http://jservice.io/api/clues/"
var $category = "http://jservice.io/api/category?id="

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
    $.get($category + Math.floor((Math.random() * 18000) + 1)).then(function(data) {
      $('.catOne').append(data.title)
    })
    $.get($category + Math.floor((Math.random() * 18000) + 1)).then(function(data) {
    $('.catTwo').append(data.title)
    })
    $.get($category + Math.floor((Math.random() * 18000) + 1)).then(function(data) {
    $('.catThree').append(data.title)
    })
    $.get($category + Math.floor((Math.random() * 18000) + 1)).then(function(data) {
    $('.catFour').append(data.title)
    })
    $.get($category + Math.floor((Math.random() * 18000) + 1)).then(function(data) {
    $('.catFive').append(data.title)
    })
})

$('.firstCategory').click(function (event) {
  event.preventDefault()
  $('#myAnswerModal').modal('show');
})

$('.submitAnswer').click(function (event) {
  event.preventDefault()
})
$('.answerInput').keyup(function(e){
  e.preventDefault()
  if(e.which == 13) {
    $('.submitAnswer').click();
  }
});
