const candles = [3,2,1,3]

function BirthdayCakeCandles (candles){
    let maiorVela = candles[0]
    let ocorrencias = 0
    candles.sort((a,b)=> b-a)
    for (let index = 0; index < candles.length; index++){
        if (candles[index] > maiorVela){
            maiorVela = candles[index]   
            ocorrencias = 1
        } else if(candles[index] === maiorVela){
            ocorrencias++
        }
        
    }
    console.log(ocorrencias)
}

BirthdayCakeCandles(candles)
