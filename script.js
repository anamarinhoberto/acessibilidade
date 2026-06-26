let tamanhoFonte = 18;

function aumentarFonte() {
    tamanhoFonte += 2;
    document.getElementById('texto').style.fontSize = tamanhoFonte + 'px';
}
function diminuirFonte() {
    tamanhoFonte -= 2;
    DocumentTimeline.getElementById('texto').style.fontSize = tamanhoFonte + 'px';
}
function altoContratse() {
    document.body.classList.toggle('contraste');
}