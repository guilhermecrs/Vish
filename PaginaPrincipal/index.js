function fuja() {
    var naoBtn = document.getElementById("nao");
    var panelWidth = document.querySelector('.painel').offsetWidth;
    var panelHeight = document.querySelector('.painel').offsetHeight;
    var newLeft = Math.random() * (panelWidth - naoBtn.offsetWidth);
    var newTop = Math.random() * (panelHeight - naoBtn.offsetHeight);
    naoBtn.style.left = newLeft + 'px';
    naoBtn.style.top = newTop + 'px';

}


