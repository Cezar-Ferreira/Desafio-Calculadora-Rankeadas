function saldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}

function calculadoraDePartidasRankeadas(vitoria) {
    let nivel;

    switch (true) {
        case vitoria < 10:
            nivel = "Ferro";
            break;
        case vitoria >= 10 && vitoria <= 20:
            nivel = "Bronze";
            break;
        case vitoria >= 21 && vitoria <= 50:
            nivel = "Prata";
            break;
        case vitoria >= 51 && vitoria <= 80:
            nivel = "OURO";
            break;
        case vitoria >= 81 && vitoria <= 90:
            nivel = "Diamante";
            break;
        case vitoria >= 91 && vitoria <= 100:
            nivel = "Lendário";
            break;
        case vitoria >= 101:
            nivel = "Imortal";
            break;
        default:
            console.log("Saldo inválido");
    }
    
    return nivel;
}

let resultado = saldoVitorias(15, 5);
let nivel = calculadoraDePartidasRankeadas(resultado);
console.log("O herói tem o saldo de " + resultado + " e está no nível de " + nivel);
