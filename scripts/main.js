// AFTER DOM LOAD
var popup = document.getElementsByClassName('pops-ad');

$(document).ready(function() {

  var a1    = document.querySelector("#A1");
  var a2    = document.querySelector("#A2");
  var a3    = document.querySelector("#A3");
  var a4    = document.querySelector("#A4");
  var a5    = document.querySelector("#A5");
  var a6    = document.querySelector("#A6");
  var a7    = document.querySelector("#A7");
  var a8    = document.querySelector("#A8");
  var a9    = document.querySelector("#A9");
  var a10   = document.querySelector("#A10");
  var a11   = document.querySelector("#A11");
  var a12   = document.querySelector("#A12");
  var a13   = document.querySelector("#A13");
  var a14   = document.querySelector("#A14");
  var a15   = document.querySelector("#A15");
  var a16   = document.querySelector("#A16");
  var a17   = document.querySelector("#A17");
  var a18   = document.querySelector("#A18");
  var a19   = document.querySelector("#A19");
  var a20   = document.querySelector("#A20");

  var allA  = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20];
  var valArray = ['f1','f1','f2','f2','f3','f3','f4','f4','f5','f5','f6','f6','f7','f7','f8','f8','f9','f9','f10','f10'];

  var allAmob     = [ a1,  a2,  a3,  a4,  a5,  a6,  a7,  a8,  a9, a10, a11, a12];
  var valArraymob = ['f1','f1','f2','f2','f3','f3','f4','f4','f5','f5','f6','f6'];


  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // ASSIGN RANDOM TO MOBILE
   allAmob.forEach(function(el) {
     var chosenInt =  valArraymob[Math.floor(Math.random() * valArraymob.length)];
     var index = valArraymob.indexOf(chosenInt);
     el.setAttribute("class", chosenInt + " " + "cactive cface cback");
     el.parentElement.setAttribute("value", chosenInt);
     if (index > -1) {
         valArraymob.splice(index, 1);
     }
   });

   $('.marquee1-1 > span').replaceWith('HDSA2016')
 } else {
   // ASSIGN RANDOM TO
  allA.forEach(function(el) {
    var chosenInt =  valArray[Math.floor(Math.random() * valArray.length)];
    var index = valArray.indexOf(chosenInt);
    el.setAttribute("class", chosenInt + " " + "cactive cface cback");
    el.parentElement.setAttribute("value", chosenInt);
    if (index > -1) {
        valArray.splice(index, 1);
    }
  });
}


// ON .que CLICK FUNCTION
  var buttClick = $('.que');
  var that      = $(this);


  buttClick.click(function(){

    if ( $(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {

        // Add active...
        $(this).addClass('active');

        // If more than 1 active...
        if ( $('.active').length > 1 ) {

          var val1 = document.getElementsByClassName('active')[0].getAttribute('value');
          var val2 = document.getElementsByClassName('active')[1].getAttribute('value');

          if (val1 === val2) {

            // CORRECT Match
            console.log("It's a match!")
            $('.active').removeClass('que').addClass('correct');
            winMatch();
            beerMatch();
            $('.active').removeClass('active');
            var corLen = $('.correct').length;
            if (corLen === 20){
              console.log('YOU A WINNER');
            }
          } else {

            // INCORRECT Match
            console.log("That's not right...")
            $('.active').addClass('wrong');
            setTimeout(function(){
              $('.active').removeClass('active').removeClass('wrong');
            }, 700)
          }

        }
        //RECHECK
        buttClick = $('.que');
    }
  });

  $('.pops-ad').draggable();
  $('.pops-ad').hide();

  var $popup = $('.pops-ad');

  $('.pops-close').click(function(){
    for(i = 0; i < $popup.length; i++) {
      popup = $( ".pops-ad:eq(" + i + ")" )
      togPop(popup, 100 * i, false);
    }
  });


  $('.beer-button').mouseover(function(){
    var beerL = Math.floor(Math.random() * 80) + 10;
    var beerT = Math.floor(Math.random() * 60) + 10;
    $('.pops-8').animate({
      top:  beerT + "%",
      left: beerL + "%"
    }, 100, function() {
      // Animation complete.
    });

  });


});

// WIN CONDITIONS
function winMatch() {
// RANDOM SHOW
  var winNum = Math.floor(Math.random() * 10) + 0;
  var popRan = $('.pops-' + winNum);
  popRan.show();

  var corLen = $('.correct').length;
  if (corLen === 4){
    openPops(2);
  } else if (corLen === 8){
    openPops(6);
  } else if (corLen === 12){
    openPops(6);
  } else if (corLen === 16){
    openPops(6);
  } else if (corLen === 20){
    openPops(10);
  }
};

function openPops(amount) {
  var $popup = $('.pops-ad');
  for(i = 0; i < amount; i++) {
    popup = $( ".pops-ad:eq(" + i + ")" )
    togPop(popup, 200 * i, true);
  }
};

function togPop(elm, timeout, tog){
 if (tog === false) {
   setTimeout(function() {
     elm.hide();
   }, timeout);
 } else if (tog === true){
   setTimeout(function() {
     elm.show();
   }, timeout);
 }
};


function beerMatch() {
  var val1 = document.getElementsByClassName('active')[0].getAttribute('value');
  var val2 = document.getElementsByClassName('active')[1].getAttribute('value');

  if (val1 === 'f8' && val2 === 'f8') {
    $('.pops-8').show();
  }

};

// COLORS
var $win = $(window);
var w = 0;
var h = 0;

getWidth = function() {
    w = $win.width();
    h = $win.height();
};

$win.resize(getWidth).mousemove(function(e) {

    var xOff = Math.round(e.pageX/h * 255);
    var yOff = Math.round(e.pageY/h * 255);
    var z0ff = 100;

    // $(".marquee1-1").css('background','linear-gradient(rgb(' + xOff + ',' + yOff + ', 150), rgb(' + yOff + ',' + xOff + ',150), rgb(' + xOff + ',' + xOff + ',150))');
    $(".header > .header-title").css('background','hsla(' + (xOff/1.2) + ',100%, 50%, 1)');
    $(".header > .header-sub").css('background','hsla(' + (yOff) + ',100%, 50%, 1)');
    $(".footer > .footer-title").css('background','hsla(' + (300 - xOff) + ',100%, 50%, 1)');
    $(".footer > .footer-sub").css('background','hsla(' + (300 - yOff) + ',100%, 50%, 1)');

}).resize();
