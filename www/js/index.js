var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

// EVENT LSITENER FOR DEVICE READY IS HERE
document.addEventListener("deviceready", onDeviceReady, false);


function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("THE APPLICATION HAS BEEN RESUMED: " + resumed_count + " TIMES!!");
}


// device APIs are available
// DEVICE READY HANDLER IS HERE
function onDeviceReady() {

	// EVENT LISTENER FOR WHEN APP IS RESUMED
	document.addEventListener("resume", onResume, false);
	// EVENT LISTENER FOR WHEN APP IS PAUSED
	document.addEventListener("pause", onPause, false);

	launched_count++;
	updateDisplay();

	alert("device ready");
}


// HANDLER FOR WHEN APP IS PAUSED
function onPause() {
	paused_count++;
	updateDisplay();

	alert("pause");
}

// HANDLER FOR WHEN APP IS RESUMED
function onResume() {
	resumed_count++;
	updateDisplay();

	alert("resume");
}
