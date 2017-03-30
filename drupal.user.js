// ==UserScript==
// @name        Drupal Predictor Sandboxed
// @namespace   calvtdrupalpredictorsandboxed
// @version     0.3.2
// @match        http://*/*
// @downloadURL 
// @updateURL 
// @grant       none
// ==/UserScript==
(function () {
  'use strict';

  // Version
  var cbversion = '0.3.2';

  // Startup function
  window.setTimeout(slowStart, 3000);
  function slowStart() {
      console.log('@CalvT Hey o/')
  }

  var lastposttext;

  // Chat Reading Function
  function CalvDrupalBot () {
      $('.DrupalBot').removeClass('DrupalBot');
      $('#chat .user-container:last-child.user-64521').addClass('DrupalBot');
      $('#chat .user-container:last-child.user-120914').addClass('DrupalBot');
      var smokey = $('.DrupalBot .messages .message:last-child .content').text();
      var smokeylc = smokey.toLowerCase();
      var posttext = $('.DrupalBot .messages .message:last-child .content a:nth-child(3)').attr('href');

      // Targetted Site
      var site = 'drupal.se';

      if (posttext === lastposttext) {
          // Do nothing
      } else {
          if (smokeylc.includes(site)) {
              lastposttext = posttext;
              if (posttext === posttext) {
                  var postid = posttext.split('questions/').pop();
                  console.log(postid);
                  // TODO get spam id, then post spam flag
              } else {
                  // Do nothing
              }
          } else {
              // Do nothing
          }
      }
  }

  var refreshID = setInterval(CalvDrupalBot, 2000);

}) ();
