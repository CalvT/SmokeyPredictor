// ==UserScript==
// @name        Smokey Predictor
// @namespace   smokeypredictor
// @version      0.2
// @grant        none
// ==/UserScript==
(function () {
  'use strict';
  function CalvBotInterval() {
    $('.CalvBot').removeClass('CalvBot');
    $('#chat .user-container:last-child.user-64521').addClass('CalvBot');
    $('#chat .user-container:last-child.user-120914').addClass('CalvBot');
    var ab1 = $('.CalvBot .messages .message:last-child .content').text();
    var ab2 = ab1.toLowerCase();
    var ba1 = [
      'male',
      'enhancement',
      'skin',
      'care',
      'facial',
      'cream',
      'muscle',
      'supplement'
    ];
    var ab3 = '@CalvT I\'m thinking tp? - Weight: ';
    var ab4;
    function contains(target, pattern) {
      var value = 0;
      pattern.forEach(function (word) {
        value = value + target.includes(word);
      });
      ab4 = value;
      return (value > 0);
    }
    if (contains(ab2, ba1)) {
      console.log(ab4 + ab1);
      var ab5 = ab4 * 50;
      var ab6 = ab3 + ab5;
      document.getElementById('input').value = ab6;
      $('#sayit-button').click();
    } else {
      //false statement..do nothing
    }
  }
  var refreshId = setInterval(CalvBotInterval, 2000);
}) ();
