document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('minecraft').addEventListener("click", function() {
    chrome.tabs.executeScript(null, {file: 'minecraft.js'});
  });

  document.getElementById('leftShark').addEventListener("click", function() {
    chrome.tabs.executeScript(null, {file: 'leftShark.js'});
  });
});
