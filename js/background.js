chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    innerBounds: {
      width: 1000,
      height: 700,
      minWidth: 1000,
      minHeight: 700
    },
    id: "App-for-TG"
  });
});
