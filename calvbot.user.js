// ==UserScript==
// @name        Smokey Predictor
// @namespace   smokeypredictor
// @version      0.3
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
    'http',
    'male',
    'muscle',
    'skin',
    'supplement'
  ];
  var answertp = '@CalvT I\'m thinking tp? - Weight: ';
  var answerv;
  function CalvBotInterval() {
    $('.CalvBot').removeClass('CalvBot');
    $('#chat .user-container:last-child.user-64521').addClass('CalvBot');
    $('#chat .user-container:last-child.user-120914').addClass('CalvBot');
    var smokey = $('.CalvBot .messages .message:last-child .content').text();
    var smokeylc = smokey.toLowerCase();
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
  }
  var refreshId = setInterval(CalvBotInterval, 2000);
}) ();
