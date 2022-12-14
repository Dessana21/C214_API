const create = {
  nome: {
    presence: {
      allowEmpty: false,
    },
    type: "string",
  },
  produtora: {
    presence: {
      allowEmpty: false,
    },
    type: "string",
  },
  atores: {
    presence: {
      allowEmpty: false,
    },
    type: "string",
  },

  ano: {
    presence: {
      allowEmpty: false,
    },
    type: "string",
  },
};

module.exports = {
  create,
};
