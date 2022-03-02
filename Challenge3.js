const apagar = (object) => {
    if(object.nome === null){
        delete object.nome
    } 
    else if (object.idade === null) {
        delete object.idade
    } 
    else if (object.cpf === null) {
        delete object.cpf
    } 
    else {
        console.log("Nada para deletar")
    }
    console.log(object)
}

apagar({
    nome: null,
    idade: 20,
    cpf: "5454654654"
})
