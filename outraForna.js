let quantidadeVitorias = 36 // insira quantidade de Vitorias 
let quantidadeDerrotas = 4 // insira quantidade de Derrotas

let vitoriasEfetivas = quantidadeVitorias - quantidadeDerrotas
let seuRanking = calcularResultadosDeRankeadas(vitoriasEfetivas)

console.log("O Herói tem de saldo de " + vitoriasEfetivas + " vitoria(s) e está no nível: " + seuRanking)

function calcularResultadosDeRankeadas(vitoriasEfetivas) {
    let ranking

   
    if (vitoriasEfetivas <= 10) {
        ranking = "Ferro"
    } else if (vitoriasEfetivas >= 11 && vitoriasEfetivas <= 20) {
        ranking = "Bronze"
    } else if (vitoriasEfetivas >= 21 && vitoriasEfetivas <= 50) {
        ranking = "Prata"
    } else if (vitoriasEfetivas >= 51 && vitoriasEfetivas <= 80) {
        ranking = "Ouro"
    } else if (vitoriasEfetivas >= 81 && vitoriasEfetivas <= 90) {
        ranking = "Diamante"
    } else if (vitoriasEfetivas >= 91 && vitoriasEfetivas <= 100) {
        ranking = "Lendário"
    } else if (vitoriasEfetivas >= 101) {
        ranking = "Imortal"
    } else {
        ranking = "Valores incorretos, verifique as entradas"
    }

    return ranking
}
