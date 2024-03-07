var image = document.querySelector('.media');
var touchCount = 0;
image.addEventListener('click', function () {
    touchCount++;
    if (touchCount === 3) {
        var confirmDelete = confirm('¿Estás seguro de que quieres borrar esta imagen?');
        if (confirmDelete) {
            image.remove();
        } else {
            touchCount = 0;
        }
    }
});