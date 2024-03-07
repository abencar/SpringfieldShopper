window.onload = function () {
    setTimeout(function () {
        alertify.alert().setting({
            'message': '<div id="alertContainer"><a href="https://abencar.github.io/paginaWeb/login.html"> <img class="anuncio" src="../src/FreeRobux.jpg" /></a></div>',
            'title': 'Free Robux!',
        }).show().set({ 'movable': true, 'moveBounded': true }).set({ 'pinnable': false, 'modal': true }).set('closable', true).set;

        var alertImage = document.getElementById('alertImage');
        if (window.innerWidth <= 600) {
            alertImage.style.width = '100%';
            alertImage.style.width = '50%';
            alertImage.style.height = 'auto';
        }
    }, 3000);
};

