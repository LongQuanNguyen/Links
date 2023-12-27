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

// Make the zoom to 80% on mobile screen with height <= 900px
window.onload = function() {
    var viewport = document.getElementById('viewport');
    var screen = window.screen;
    if (screen.height <= 900 ) { 
        viewport.setAttribute('content', 'width=device-width, initial-scale=0.8');
    }
}