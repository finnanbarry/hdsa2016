//TO-DO
  //Return value on click [DONE]
  //Return value attibute on button click [DONE]
    //Scope this down to one function

  //Set values to be randomly assigned
  //Return corrected value on click

  //Scale to 4 buttons w/ 2 values


// AFTER DOM LOAD
$(document).ready(function() {

  // Fisher–Yates Shuffle
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  // var valArray = [1, 1, 2, 2];
  // shuffle(valArray);

  var a1    = document.querySelector("#A1");
  var a2    = document.querySelector("#A2");
  var a3    = document.querySelector("#A3");
  var a4    = document.querySelector("#A4");
  var a5    = document.querySelector("#A5");
  var a6    = document.querySelector("#A6");
  var a7    = document.querySelector("#A7");
  var a8    = document.querySelector("#A8");
  var allA  = [a1, a2, a3, a4, a5, a6, a7, a8];

  var valArray = [1, 1, 2, 2, 3, 3, 4, 4];

  // ASSIGN RANDOM TO
  allA.forEach(function(el) {
    var chosenInt =  valArray[Math.floor(Math.random() * valArray.length)];
    var index = valArray.indexOf(chosenInt);
    //var chosenInt =  valArray[Math.floor(Math.random() * (2 - 1)) + 1];
    el.setAttribute("value", chosenInt);
    if (index > -1) {
        valArray.splice(index, 1);
    }
    // if (search all .butts for chosenInt > more than 2) {
    //      valArray.splice(chosenInt);
    //  }
    //valArray.splice(0, 1, chosenInt);
    console.log(valArray);
  });

// ON .que CLICK FUNCTION
  var buttClick = $('.que');
  var that      = $(this);

  buttClick.click(function(){

    if ( that.hasClass('active')) {
        that.removeClass('active');
    } else {

        var active  = $('.active');
        var wrong   = $('.wrong');

        //console.log($(this).getAttribute('value'));

        if ( $('.active').length > 1 ) {
          for (i = 0; i < 2; i++) {
            active.setAttribute('class', 'que');
          }
        }

        this.addClass('active');

        if (active.length > 1) {

          var val1 = document.getElementsByClassName('active')[0].getAttribute('value');
          var val2 = document.getElementsByClassName('active')[1].getAttribute('value');

          if (val1 === val2) {
            console.log("It's a match!")
            active.removeClass('que');
            if (el.classList){
              el.classList.add('correct');
            } else {
              el.className += ' ' + 'correct';
            }
            //active.addClass('correct');
            active.removeClass('active');
          } else {
            console.log("That's not right...")
            active.addClass('wrong');
            active.removeClass('active');
            setTimeout(function(){
              wrong.removeClass('wrong');
            }, 2000)
          }

        }

        //RECHECK
        buttClick = $('.que');
    }
  });

  //IF LAST .active HAD SAME VALUE THEN CONFIRM
  function lastCheck( button ) {
    //console.log( $(button).attr('value') );
  }

  // IF ACTIVE # > 2, ERASE ALL ACTIVE
  function activeCheck() {
    if ( $('.active').length > 1 ) {
      for (i = 0; i < 2; i++) {
        document.querySelector('.active').setAttribute('class', 'que');
      }
    }
  }

  // CHECK IF THE 2 .active MATCH
  function matchCheck() {

    var twoVals = $('.active').length;
    if (twoVals > 1) {

      var val1 = document.getElementsByClassName('active')[0].getAttribute('value');
      var val2 = document.getElementsByClassName('active')[1].getAttribute('value');

      if (val1 === val2) {
        console.log("It's a match!")
        $('.active').removeClass('que');
        $('.active').addClass('correct');
        $('.active').removeClass('active');
      } else {
        console.log("That's not right...")
        $('.active').addClass('wrong');
        $('.active').removeClass('active');
        setTimeout(function(){
          $('.wrong').removeClass('wrong');
        }, 2000)
      }
    }
  }

});
