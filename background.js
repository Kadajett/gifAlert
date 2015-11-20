(function() {
  var firebaseRef = new Firebase("https://gifalert.firebaseio.com/");

  firebaseRef.child("alerts").on("child_added", catchAlert);

  function catchAlert(alert) {
    var value = alert.val();
    console.log('Alert Caught: ', value);
    routeAlert(value);
  };

  function routeAlert(alert) {
    switch (alert) {
      case gifs.alertTitles.minecraft:
        gifs.execute.minecraft();
        break;
      case gifs.alertTitles.leftShark:
        gifs.execute.leftShark();
        break;
      default:
        console.log("routeAlert: ", "Unable to find gif with id: " + alert);
        break;
    }
  };

  function injectScript(fileName) {
    var s = document.createElement('script');
    // TODO: add "script.js" to web_accessible_resources in manifest.json
    s.src = chrome.extension.getURL(fileName);
    s.onload = function() {
      this.parentNode.removeChild(this);
    };
    (document.head || document.documentElement).appendChild(s);
  };

  var gifs = (function() {

    var api = {
      execute: {
        minecraft: executeMinecraft,
        leftShark: executeLeftShark
      },
      alertTitles: {
        minecraft: 'letsplayminecraft',
        leftShark: 'leftShark'
      }
    };

    function executeMinecraft() {
      injectScript('minecraft.js')
    };

    function executeLeftShark() {
      injectScript('leftShark.js')
    };

    var __api = this;
    return api;
  })();
})();
