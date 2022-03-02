const desenho = (a, b) => {
    let linha = "+";
    let coluna = '-';
    if (a > 0 && b > 0) {
        for(let i = 0; i < a -2; i++) {
            linha += "-";
            coluna += ' ';
        }
        linha += "+";
        coluna += '-';

        console.log(linha)

        for(let i = 0; i < b -2; i++) {
            console.log(coluna);
        }
        console.log(linha)
    }
    else {
        console.log("Os valores não podem ser menores que 1")
    }
}
 desenho(10, 5)