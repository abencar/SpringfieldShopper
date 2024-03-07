document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    var formattedDate = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear();
    document.getElementById("fecha").textContent ="Las noticias de ultima hora del " + formattedDate;
}); 
