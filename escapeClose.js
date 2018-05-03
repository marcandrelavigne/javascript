// Close a popup on Escape Key
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ('key' in evt) {
        isEscape = (evt.key == 'Escape' || evt.key == 'Esc');
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (isEscape) {
        CloseClick(); // Call the function that close our popup
    }
};
