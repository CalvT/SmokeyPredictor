// ==UserScript==
// @name        Smokey Predictor Sandboxed
// @namespace   smokeypredictorsandboxed
// @include     http://chat.stackexchange.com/rooms/55422/calvt-test-sandbox
// @version     0.6.2
// @downloadURL https://github.com/CalvT/SmokeyPredictor/raw/master/calvbot.user.js
// @updateURL https://github.com/CalvT/SmokeyPredictor/raw/master/calvbot.user.js
// @grant       none
// ==/UserScript==
(function () {
  'use strict';

  // Version here to reduce possibility of not updating both
  var cbversion = '0.6.2';

  // Startup Function
  window.setTimeout(slowStart, 3000);
  function slowStart() {
    document.getElementById('input').value = '@CalvT hey o/';
    $('#sayit-button').click();
  }

  // Trigger Keywords
  var keywords = [
    // spam sites
    'apple.se',
    'askubuntu.com',
    'drupal.se',
    'graphicdesign.se',
    // smokey keyworks
    'blacklisted user',
    'blacklisted website',
    'manually reported',
    // spam words
    'care',
    'cream',
    'endovex',
    'enhancement',
    'enlargement',
    'facial',
    'food',
    'http',
    'male',
    'miracle',
    'muscle',
    'penis',
    'serum',
    'skin',
    'supplement',
    'wrinkles',
    // spam websites
    'fornatgaex\.com',
    'healthpluscogni\.com',
    'skincaresfreetrial\.com',
    'wellnessfeeds\.com'
  ];

  // Fixed Commands
  var alive = '@calvbot alive?';
  var alivereply = '@CalvT as much as you are :)';
  var location = '@calvbot location?';
  var locationreply = '@CalvT your AWS EC2 instance';
  var restart = '@calvbot restart please';
  var restartreply ='@CalvT ok, give me a minute';
  var versioncommand = '@calvbot version';
  var answertp = '@CalvT I\'m thinking tp? - Weight: ';

  // Reading Chat Function
  function CalvBotInterval() {
    $('.CalvBot').removeClass('CalvBot');
    $('.CalvBotCommand').removeClass('CalvBotCommand');
    $('#chat .user-container:last-child.user-64521').addClass('CalvBot').addClass('CalvBotCommand');
    // $('#chat .user-container:last-child.user-120914').addClass('CalvBot');
    var smokey = $('.CalvBot .messages .message:last-child .content').text();
    var smokeylc = smokey.toLowerCase();
    var cbcommand = $('.CalvBotCommand .messages .message:last-child .content').text();
    var cbcommandlc = cbcommand.toLowerCase();

    // Answer Smokey Function
    var answervalue;
    var answerreason;
    function contains(target, pattern) {
      var value = 0;
      pattern.forEach(function (word) {
        value = value + target.includes(word);
        console.log(pattern);
      });
      answervalue = value;
      return (value >= 3);
    }
    if (contains(smokeylc, keywords)) {
      console.log(answervalue + smokey);
      var answerweight = answervalue * 50;
      var answero = answertp + answerweight;
      document.getElementById('input').value = answero;
      $('#sayit-button').click();
    } else {
      //false statement..do nothing
    }

    // Command Functions
    var versionreply = '@CalvT I\'m running on version ' + cbversion;
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

    if (cbcommandlc === versioncommand) {
      document.getElementById('input').value = versionreply;
      $('#sayit-button').click();
    } else {
      //false statement..do nothing
    }
  }
  var refreshId = setInterval(CalvBotInterval, 2000);
}) ();
