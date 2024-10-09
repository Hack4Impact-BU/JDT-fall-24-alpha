function toggle() {
    var element = document.getElementById('hideshow1');
    var buttonElement = document.getElementsByClassName('toggler')[0];
    if (element.style.display == 'none') {
        element.style.display = 'block';
        buttonElement.innerHTML = 'Hide';
    } else {
        element.style.display = 'none';
        buttonElement.innerHTML = 'Show';
    }
}