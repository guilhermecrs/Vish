let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 2000);

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

    // Disparar manualmente o evento de mudança para atualizar a imagem
    let event = new Event('change');
    document.getElementById("radio" + count).dispatchEvent(event);
}
