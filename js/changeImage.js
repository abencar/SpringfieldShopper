let slider = document.querySelector('.slider ul');
let images = ['BartNerd.jpg', 'BartPc.jpg', 'HomerPc.jpg'];
let index = 0;

function changeImage() {
    slider.innerHTML = `<li><img class="media" src="../src/${images[index]}" alt="" height="200px" width="300px"></li>`;
    index = (index + 1) % images.length;
}

setInterval(changeImage, 3000);
