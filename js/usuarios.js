let counter = 12560;

document.addEventListener('DOMContentLoaded', (event) => {
    generateRobux();
});

function generateRobux() {
    document.getElementById('counter').style.display = 'block';
    setInterval(incrementCounter, 400);
}

function incrementCounter() {
    counter += 12;
    document.getElementById('counter').innerText = 'Vistas al periodico de hoy: ' + counter;
}