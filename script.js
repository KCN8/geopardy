var $baseURL = "https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues"
var $category = "https://cors-anywhere.herokuapp.com/http://jservice.io/api/category?id="

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
    $.get($category + Math.floor((Math.random() * 1000) + 1)).then(function(data) {
      var catOneID = data.id
      $('.catOne').append(data.title)
      $('.firstCategory100').click(function (event) {
          event.preventDefault()
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catOneID + '&value' + $('.firstCategory100').text).then(function(data) {
            $('.modal-header').append(data[0].question)
            var score = data[0].value
            console.log(score);
          })
      })
      $('.firstCategory200').click(function (event) {
          event.preventDefault()
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catOneID + '&value' + $('.firstCategory200').text).then(function(data) {
            $('.modal-header').append(data[1].question)
            var score = data[1].value
            console.log(score);
          })
      })
      $('.firstCategory300').click(function (event) {
          event.preventDefault()
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catOneID + '&value' + $('.firstCategory300').text).then(function(data) {
            $('.modal-header').append(data[2].question)
            var score = data[2].value
            console.log(score);
          })
      })
      $('.firstCategory400').click(function (event) {
          event.preventDefault()
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catOneID + '&value' + $('.firstCategory400').text).then(function(data) {
            $('.modal-header').append(data[3].question)
            var score = data[3].value
            console.log(score);
          })
      })
      $('.firstCategory500').click(function (event) {
          event.preventDefault()
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catOneID + '&value' + $('.firstCategory500').text).then(function(data) {
            $('.modal-header').append(data[4].question)
            var score = data[4].value
            console.log(score);
          })
      })
    })
    $.get($category + Math.floor((Math.random() * 18000) + 1)).then(function(data) {
      var catTwoID = data.id
      $('.catTwo').append(data.title)
    })
    $.get($category + Math.floor((Math.random() * 18000) + 1)).then(function(data) {
      var catThreeID = data.id
      $('.catThree').append(data.title)
    })
    $.get($category + Math.floor((Math.random() * 18000) + 1)).then(function(data) {
      var catFourID = data.id
      $('.catFour').append(data.title)
    })
    $.get($category + Math.floor((Math.random() * 18000) + 1)).then(function(data) {
      var catFiveID = data.id
      $('.catFive').append(data.title)
    })
})

$('.submitAnswer').click(function (event) {
  event.preventDefault()
})
$('.answerInput').keyup(function(enterPressed){
  enterPressed.preventDefault()
  if(enterPressed.which == 13) {
    $('.submitAnswer').click();
  }
});
