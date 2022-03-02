function recorrencia (letra, frase) {
    let quantidade = 0;

    for (let i = 0; i < frase.length; i++) {
        if(frase[i] == letra) {
            quantidade++;
        }
    }
    return console.log(`A letra '${letra}' apareceu ${quantidade} vezes na frase.`)
}

recorrencia('v', 'O rato roeu a roupa do rei de roma');