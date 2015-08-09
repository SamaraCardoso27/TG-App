var device_selector = document.getElementById('device-selector');
var add_fingerprint = document.getElementById('add_fingerprint');
var device_info = document.getElementById('device-info');
var vendorId = 0x1491;
var productId = 0x0020;

console.log(vendorId);
console.log(productId);

var devices = {"vendorId": vendorId, "productId": productId};


/*
add_fingerprint.addEventListener('click', function() {
  	console.log('add_fingerprint');

});

function onDeviceFound(devices) {
  this.devices=devices;
  if (devices) {
    if (devices.length > 0) {
      console.log("Device(s) found: "+devices.length);
    } else {
      console.log("Device could not be found");
    }
  } else {
    console.log("Permission denied.");
  }
}
chrome.usb.getDevices({"vendorId": vendorId, "productId": productId}, onDeviceFound);
*/



var requestButton = document.getElementById("add_fingerprint");
requestButton.addEventListener('click', function() {
  chrome.permissions.request( 
      {permissions: [
          {'usbDevices': [{'vendorId': 5265, "productId": 32}] }
       ]}, 
    function(result) {
      if (result) { 
        requestButton.style.display = 'none';
        console.log('App was granted the "usbDevices" permission.');
        chrome.usb.findDevices(
            {"vendorId": 5265, "productId": 32},
           callback)
      } else {
        console.log('App was NOT granted the "usbDevices" permission.');
      }
    });
  });

function callback(){
	console.log('passou aqui');
}