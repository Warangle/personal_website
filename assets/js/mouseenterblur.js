function onMouseEnterBlur(event) {
    const textElement = event.target.previousElementSibling;

    event.target.classList.add('blur-effect');
    textElement.classList.add('text-opacity-full');
}

function onMouseLeaveBlur(event) {
    const textElement = event.target.previousElementSibling;


    event.target.classList.add('clear-blur-effect');
    event.target.classList.remove('blur-effect');

    textElement.classList.remove('text-opacity-full');
    textElement.classList.add('text-opacity-none');

    setTimeout(() => {
        event.target.classList.remove('clear-blur-effect');
        textElement.classList.remove('text-opacity-none');
    }, 300); // Time should match the animation duration in milliseconds
}