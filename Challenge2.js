// const numeros = [50, 25];
// let porcentagem = (numeros[1] / numeros[0]) * 100;

// console.log(porcentagem)

const porcentagem = (a, b) => {
    if(b > a) {
        return "Cálculo inválido."
    } else {
    const porcentagem = (b / a) * 100;
    return porcentagem;
    }
}

console.log(porcentagem(50,23.5))