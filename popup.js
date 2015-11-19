document.addEventListener('DOMContentLoaded', function() {

});

window.app = (function(){
  var firebaseRef = new Firebase("https://gifalert.firebaseio.com/");

  firebaseRef.child("alerts").on("child_added", catchAlert);

  function catchAlert(alert){
    var value = alert.val();
    console.log('Alert Caught: ', value);
    routeAlert(value);
  };

  function routeAlert(alert){
    switch (alert) {
      case "letsplayminecraft":
        gifs.execute.minecraft();
        break;
      case "leftShark":
        gifs.execute.leftShark();
        break;
      default:
        console.log("routeAlert: ", "Unable to find gif with id: " + alert);
        break;
    }
  };

  var gifs = (function(){

    var api = {
      execute: {
        minecraft: executeMinecraft,
        leftShark: executeLeftShark
      }
    };

    function executeMinecraft(){
      chrome.tabs.executeScript(null, {file: 'minecraft.js'});
    };

    function executeLeftShark(){
      chrome.tabs.executeScript(null, {file: 'leftShark.js'});
    };

    var __api = this;
    return api;
  })();

  document.getElementById('minecraft').addEventListener("click", function() {

  });

  document.getElementById('leftShark').addEventListener("click", function() {

  });

  return {test: 'asdf'};
})();
