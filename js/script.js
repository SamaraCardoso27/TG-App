var device_selector = document.getElementById('device-selector');
var add_fingerprint = document.getElementById('add_fingerprint');
var device_info = document.getElementById('device-info');
var access = 1;
var auth = '0DDEE29FAA57CF9DBEE480986E7B0686'
var vendorId = 0x1491;
var productId = 0x0020;

console.log(vendorId);
console.log(productId);

var devices = {"vendorId": vendorId, "productId": productId};


var requestButton = document.getElementById("add_fingerprint");
requestButton.addEventListener('click', function() {
  chrome.permissions.request( 
      {permissions: [
          {'usbDevices': [{'vendorId': 5265, "productId": 32}] }
       ]}, 
    function(result) {
      if (result) { 
        chrome.usb.findDevices(
            {"vendorId": 5265, "productId": 32},
           callback)
        console.log('OK');
        $("#keypoint1").css('background','green');
      } else {
        console.log('ERROR');
        $("#keypoint1").css('background','red');
      }
    });
  });

function callback(){
	console.log('Teste');
}




