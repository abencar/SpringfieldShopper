document.addEventListener('DOMContentLoaded', (event) => {
    eliminarImagen();
});

function eliminarImagen() {
    var image = document.querySelector('.media');
    image.addEventListener('click', function () {
        var confirmDelete = confirm('¿Estás seguro de que quieres borrar esta imagen?');
        if (confirmDelete) {
            image.remove();
        }
    })
};