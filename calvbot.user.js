// ==UserScript==
// @name        Smokey Predictor
// @namespace   smokeypredictor
// @version      0.4.2
// @grant        none
// ==/UserScript==
(function () {
  'use strict';
  var keywords = [
    'blacklisted website',
    'care',
    'cream',
    'enhancement',
    'facial',
    'food',
    'http',
    'male',
    'miracle',
    'muscle',
    'skin',
    'supplement'
  ];
  var answertp = '@CalvT I\'m thinking tp? - Weight: ';
  var answerv;
  var alive = '@calvbot alive?';
  var location = '@calvbot location?';
  var restart = '@calvbot restart please';
  function CalvBotInterval() {
    $('.CalvBot').removeClass('CalvBot');
    $('.CalvBotCommand').removeClass('CalvBotCommand');
    $('#chat .user-container:last-child.user-64521').addClass('CalvBot').addClass('CalvBotCommand');
    $('#chat .user-container:last-child.user-120914').addClass('CalvBot');
    var smokey = $('.CalvBot .messages .message:last-child .content').text();
    var smokeylc = smokey.toLowerCase();
    var cbcommand = $('.CalvBotCommand .messages .message:last-child .content').text();
    var cbcommandlc = cbcommand.toLowerCase();
    function contains(target, pattern) {
      var value = 0;
      pattern.forEach(function (word) {
        value = value + target.includes(word);
      });
      answerv = value;
      return (value >= 2);
    }
    if (contains(smokeylc, keywords)) {
      console.log(answerv + smokey);
      var answerw = answerv * 50;
      var answero = answertp + answerw;
      document.getElementById('input').value = answero;
      $('#sayit-button').click();
    } else {
      //false statement..do nothing
    }
    if (cbcommandlc === alive) {
      document.getElementById('input').value = '@CalvT as much as you are :)';
      $('#sayit-button').click();
    } else {
      //false statement..do nothing
    }

    if (cbcommandlc === location) {
      document.getElementById('input').value = '@CalvT your AWS EC2 instance';
      $('#sayit-button').click();
    } else {
      //false statement..do nothing
    }

    if (cbcommandlc === restart) {
      document.getElementById('input').value = '@CalvT ok, give me a minute';
      $('#sayit-button').click();
      location.reload(true);
    } else {
      //false statement..do nothing
    }
  }
  var refreshId = setInterval(CalvBotInterval, 2000);
}) ();
