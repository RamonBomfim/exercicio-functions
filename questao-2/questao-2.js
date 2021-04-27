const cartoamante = (numFilhos, nomeConjuge, cidade, funcao) => {
    return `Você ocupará a função de ${funcao} na cidade de ${cidade}, vai se casar com o(a) ${nomeConjuge} e terá ${numFilhos} filho(s)`;
};

console.log(cartoamante(2, 'Raphaela', 'Recife', 'Engenheiro de Software'));