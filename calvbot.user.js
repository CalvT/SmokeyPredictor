// ==UserScript==
// @name        Smokey Predictor
// @namespace   smokeypredictor
// @version      0.5
// @grant        none
// ==/UserScript==
(function () {
  'use strict';

  // Startup Function
  window.setTimeout(slowStart, 3000);
  function slowStart() {
    document.getElementById('input').value = '@CalvT hey o/';
    $('#sayit-button').click();
  }

  // Trigger Keywords
  var keywords = [
    'apple.se',
    'askubuntu.com',
    'drupal.se',
    'graphicdesign.se',
    'blacklisted website',
    'care',
    'cream',
    'enhancement',
    'enlargement',
    'facial',
    'food',
    'http',
    'male',
    'miracle',
    'muscle',
    'penis',
    'skin',
    'supplement'
  ];

  // Reading Chat Function
  function CalvBotInterval() {
    $('.CalvBot').removeClass('CalvBot');
    $('.CalvBotCommand').removeClass('CalvBotCommand');
    $('#chat .user-container:last-child.user-64521').addClass('CalvBot').addClass('CalvBotCommand');
    $('#chat .user-container:last-child.user-120914').addClass('CalvBot');
    var smokey = $('.CalvBot .messages .message:last-child .content').text();
    var smokeylc = smokey.toLowerCase();
    var cbcommand = $('.CalvBotCommand .messages .message:last-child .content').text();
    var cbcommandlc = cbcommand.toLowerCase();

    // Answer Smokey Function
    var answertp = '@CalvT I\'m thinking tp? - Weight: ';
    var answerv;
    function contains(target, pattern) {
      var value = 0;
      pattern.forEach(function (word) {
        value = value + target.includes(word);
      });
      answerv = value;
      return (value >= 3);
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

    // Command Functions
    var alive = '@calvbot alive?';
    var alivereply = '@CalvT as much as you are :)',
    var location = '@calvbot location?';
    var locationreply = '@CalvT your AWS EC2 instance',
    var restart = '@calvbot restart please';
    var restartreply ='@CalvT ok, give me a minute',
    var reload = function() {window.location.href=window.location.href};

    if (cbcommandlc === alive) {
      document.getElementById('input').value = alivereply;
      $('#sayit-button').click();
    } else {
      //false statement..do nothing
    }

    if (cbcommandlc === location) {
      document.getElementById('input').value = locationreply;
      $('#sayit-button').click();
    } else {
      //false statement..do nothing
    }

    if (cbcommandlc === restart) {
      document.getElementById('input').value = restartreply;
      $('#sayit-button').click();
      window.setTimeout(reload, 3000);
    } else {
      //false statement..do nothing
    }
  }
  var refreshId = setInterval(CalvBotInterval, 2000);
}) ();
