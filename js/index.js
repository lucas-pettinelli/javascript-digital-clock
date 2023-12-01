const horE1 = document.getElementById("hora");
const minE1 = document.getElementById("minuto");
const segE1 = document.getElementById("segundo");

function atualizacaoRelogio() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    horE1.innerText = h;
    minE1.innerText = m;
    segE1.innerText = s;

    setTimeout(() => {
        atualizacaoRelogio()
    }, 1000)

}

function mudarBackgroundDiaOuNoite(){
    let horaAtual = new Date().getHours();
    if(horaAtual >= 6 && horaAtual < 12){
        if (document.body) {
            document.body.style.backgroundImage = 'linear-gradient(to top, #56ccf2, #2f80ed)';
        }
    }else if(horaAtual >= 12 && horaAtual < 18){
        if (document.body) {
            document.body.style.backgroundImage = 'linear-gradient(to bottom, #265073, #ef8e38)';
        }
    } else {
        if (document.body) {
            document.body.style.backgroundImage = 'linear-gradient(to bottom, #141e30, #243b55)'
        }
    }
}   


atualizacaoRelogio()
mudarBackgroundDiaOuNoite()