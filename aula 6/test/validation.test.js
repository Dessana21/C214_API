const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Dessana",
        produtora: "prod.brazil",
        atores: "ator1, ator2, ator3",
        ano:"2000",
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        nome: "Dessana",
        produtora: "prod.brazil"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
