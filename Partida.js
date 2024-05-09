 
function calculatorRank(win,Defeat){
    let rank= (win - Defeat)
    let rankHero = ""
    if(rank<=10 ){
        rankHero= "Ferro"
    }else if (rank>=11 && rank<=20 ){
        rankHero= "Bronze"
    }else if (rank>=21 && rank<=50 ){
        rankHero= "Prata"
    }else if (rank>=51 && rank<=80 ){
        rankHero= "Ouro"
    }else if (rank>=81 && rank<=90 ){
        rankHero= "Diamante"
    }else if (rank>=91 && rank<=100 ){
        rankHero= "Lendário"
    }else if (rank>=101 ){
        rankHero= "Imortal"
    } return {rankHero,rank}
} let resultado = calculatorRank(90,20)
console.log(`Herói tem de saldo de ${resultado.rank} e está no nível de ${resultado.rankHero}`)