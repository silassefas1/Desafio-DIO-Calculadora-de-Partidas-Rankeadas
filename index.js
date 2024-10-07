let quantidadeVitorias = 41  // insira quantidade de Vitorias
let quantidadeDerotas = 15 // insira quantidade de Vitorias
/*PS. como no curso ainda não foi mostrado como receber dados do usuario ficara asism*/


let vitoriasEfetivas = quantidadeVitorias - quantidadeDerotas
let seuRanking = calcularResultadosDeRankeadas(vitoriasEfetivas)

console.log("O Herói tem de saldo de "+ vitoriasEfetivas +" vitoria(s) e está no nível: " + seuRanking)

function calcularResultadosDeRankeadas(vitoriasEfetivas){
    let ranking
        
     switch (true){
        case(vitoriasEfetivas <= 10 ):
            ranking = "Ferro"
            break;
        case(vitoriasEfetivas >= 11 && vitoriasEfetivas <=20):
            ranking = "Bronze"
            break;
        case(vitoriasEfetivas >= 21 && vitoriasEfetivas <=50 ):
            ranking = "Prata"
            break;
        case(vitoriasEfetivas >= 51 && vitoriasEfetivas <=80 ):
            ranking = "Ouro"
            break;
        case(vitoriasEfetivas >= 81 && vitoriasEfetivas <=90 ):
            ranking = "Diamante"
            break;
        case(vitoriasEfetivas >= 91 && vitoriasEfetivas <=100 ):
            ranking = "Lendario"
            break;
        case(vitoriasEfetivas >= 101):
            ranking = "Imortal"
            break;
        default: 
            ranking = "Valores incorretos, verifique as entras"
    }
    return ranking
}