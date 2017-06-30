var $baseURL = "https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues"
var $category = "https://cors-anywhere.herokuapp.com/http://jservice.io/api/category?id="
var answer = ''
var score = 0
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
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catOneID + '&value' + $('.firstCategory100').text).then(function(data) {
            $('.modal-header').append(data[0].question)
            score += data[0].value
            answer = data[0].answer
            console.log(answer);
          })
      })
      $('.firstCategory200').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catOneID + '&value' + $('.firstCategory200').text).then(function(data) {
            $('.modal-header').append(data[1].question)
            score += data[1].value
            answer = data[1].answer
            console.log(answer);
          })
      })
      $('.firstCategory300').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catOneID + '&value' + $('.firstCategory300').text).then(function(data) {
            $('.modal-header').append(data[2].question)
            score += data[2].value
            answer = data[2].answer
            console.log(answer);
          })
      })
      $('.firstCategory400').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $('#myAnswerModal').modal('show')
          $(this).attr('disabled','disabled')
          $.get($baseURL + '?category=' + catOneID + '&value' + $('.firstCategory400').text).then(function(data) {
            $('.modal-header').append(data[3].question)
            score += data[3].value
            answer = data[3].answer
            console.log(answer);
          })
      })
      $('.firstCategory500').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $('#myAnswerModal').modal('show')
          $(this).attr('disabled','disabled')
          $.get($baseURL + '?category=' + catOneID + '&value' + $('.firstCategory500').text).then(function(data) {
            $('.modal-header').append(data[4].question)
            score += data[4].value
            answer = data[4].answer
            console.log(answer);
          })
      })
    })
    $.get($category + Math.floor((Math.random() * 1000) + 1)).then(function(data) {
      var catTwoID = data.id
      $('.catTwo').append(data.title)
      $('.secondCategory100').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catTwoID + '&value' + $('.secondCategory100').text).then(function(data) {
            $('.modal-header').append(data[0].question)
            score += data[0].value
            answer = data[0].answer
          })
      })
      $('.secondCategory200').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catTwoID + '&value' + $('.secondCategory200').text).then(function(data) {
            $('.modal-header').append(data[1].question)
            score += data[1].value
            answer = data[1].answer
          })
      })
      $('.secondCategory300').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catTwoID + '&value' + $('.secondCategory300').text).then(function(data) {
            $('.modal-header').append(data[2].question)
            score += data[2].value
            answer = data[2].answer
          })
      })
      $('.secondCategory400').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catTwoID + '&value' + $('.secondCategory400').text).then(function(data) {
            $('.modal-header').append(data[3].question)
            score += data[3].value
            answer = data[3].answer
          })
      })
      $('.secondCategory500').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catTwoID + '&value' + $('.secondCategory500').text).then(function(data) {
            $('.modal-header').append(data[4].question)
            score += data[4].value
            answer = data[4].answer
          })
      })
    })
    $.get($category + Math.floor((Math.random() * 1000) + 1)).then(function(data) {
      var catThreeID = data.id
      $('.catThree').append(data.title)
      $('.thirdCategory100').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catThreeID + '&value' + $('.thirdCategory100').text).then(function(data) {
            $('.modal-header').append(data[0].question)
            score += data[0].value
            answer = data[0].answer
          })
      })
      $('.thirdCategory200').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catThreeID + '&value' + $('.thirdCategory200').text).then(function(data) {
            $('.modal-header').append(data[1].question)
            score += data[1].value
            answer = data[1].answer
          })
      })
      $('.thirdCategory300').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catThreeID + '&value' + $('.thirdCategory300').text).then(function(data) {
            $('.modal-header').append(data[2].question)
            score += data[2].value
            answer = data[2].answer
          })
      })
      $('.thirdCategory400').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catThreeID + '&value' + $('.thirdCategory400').text).then(function(data) {
            $('.modal-header').append(data[3].question)
            score += data[3].value
            answer = data[3].answer
          })
      })
      $('.thirdCategory500').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catThreeID + '&value' + $('.thirdCategory500').text).then(function(data) {
            $('.modal-header').append(data[4].question)
            score += data[4].value
            answer = data[4].answer
          })
      })
    })
    $.get($category + Math.floor((Math.random() * 1000) + 1)).then(function(data) {
      var catFourID = data.id
      $('.catFour').append(data.title)
      $('.fourthCategory100').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catFourID + '&value' + $('.fourthCategory100').text).then(function(data) {
            $('.modal-header').append(data[0].question)
            score += data[0].value
            answer = data[0].answer
          })
      })
      $('.fourthCategory200').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catFourID + '&value' + $('.fourthCategory200').text).then(function(data) {
            $('.modal-header').append(data[1].question)
            score += data[1].value
            answer = data[1].answer
          })
      })
      $('.fourthCategory300').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catFourID + '&value' + $('.fourthCategory300').text).then(function(data) {
            $('.modal-header').append(data[2].question)
            score += data[2].value
            answer = data[2].answer
          })
      })
      $('.fourthCategory400').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catFourID + '&value' + $('.fourthCategory400').text).then(function(data) {
            $('.modal-header').append(data[3].question)
            score += data[3].value
            answer = data[3].answer
          })
      })
      $('.fourthCategory500').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catFourID + '&value' + $('.fourthCategory500').text).then(function(data) {
            $('.modal-header').append(data[4].question)
            score += data[4].value
            answer = data[4].answer
          })
      })
    })
    $.get($category + Math.floor((Math.random() * 1000) + 1)).then(function(data) {
      var catFiveID = data.id
      $('.catFive').append(data.title)
      $('.fifthCategory100').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catFiveID + '&value' + $('.fifthCategory100').text).then(function(data) {
            $('.modal-header').append(data[0].question)
            score += data[0].value
            answer = data[0].answer
            console.log(answer);
          })
      })
      $('.fifthCategory200').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catFiveID + '&value' + $('.fifthCategory200').text).then(function(data) {
            $('.modal-header').append(data[1].question)
            score += data[1].value
            answer = data[1].answer
          })
      })
      $('.fifthCategory300').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catFiveID + '&value' + $('.fifthCategory300').text).then(function(data) {
            $('.modal-header').append(data[2].question)
            score += data[2].value
            answer = data[2].answer
          })
      })
      $('.fifthCategory400').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catFiveID + '&value' + $('.fifthCategory400').text).then(function(data) {
            $('.modal-header').append(data[3].question)
            score += data[3].value
            answer = data[3].answer
          })
      })
      $('.fifthCategory500').click(function (event) {
          event.preventDefault()
          $('.modal-header').text('')
          $(this).attr('disabled','disabled')
          $('#myAnswerModal').modal('show')
          $.get($baseURL + '?category=' + catFiveID + '&value' + $('.fifthCategory500').text).then(function(data) {
            $('.modal-header').append(data[4].question)
            score += data[4].value
            answer = data[4].answer
          })
      })
    })
    $('.submitAnswer').click(function (event) {
      event.preventDefault()

      var playerAnswer =  $('.answerInput').val().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').toLowerCase()
      var checkAnswer = answer.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').toLowerCase()
      if (playerAnswer == checkAnswer) {
        alert('Correct')
        $('#score').text('')
        $('#score').append(score);

      } else {
        alert('Incorrect')
      }
      $('.answerInput').val('')
    })
    $('.answerInput').keyup(function(enterPressed){
      enterPressed.preventDefault()
      if(enterPressed.which == 13) {
        $('.submitAnswer').click();
      }
    });
})
