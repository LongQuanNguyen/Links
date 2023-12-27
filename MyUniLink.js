// Copy the current website link to clipboard
function copyLink() {
    var tempInput = document.createElement("input");
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Link copied to clipboard!");
}

// Make the zoom to 100% on desktop screen.
// Default zoom is 70% for mobile.
window.onload = function() {
    var viewport = document.getElementById('viewport');
    var screen = window.screen;
    if (screen.height >= 900 ) { 
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    }
}