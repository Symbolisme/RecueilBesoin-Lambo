function redirect() {
    window.location.href = document.getElementById('fonction').value;
    return false;
}

var prenom = localStorage.getItem('prenom');
var nom = localStorage.getItem('nom'); 