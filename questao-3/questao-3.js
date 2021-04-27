const idadeConversao = (tempoDeVidaCachorro) => {
    return tempoDeVidaCachorro * 7;
};

let idades = ['1', '6', '13'];

idades.forEach(idade => {
    console.log(`Seu cachorro teria ${idadeConversao(idade)} anos de idade, caso fosse humano.`);
});