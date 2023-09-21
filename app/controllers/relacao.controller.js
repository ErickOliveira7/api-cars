const db = require("../models");
const Relacao = db.relacoes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.nameFactory) {
        res.status(400).send({
          message: "O conteúdo não pode ser vazio!"
        });
        return;
    }

    const relacao = {
        carId: req.body.carId,
        nameFactory: req.body.nameFactory,
        addressFactory: req.body.addressFactory,
        yearVehicle: req.body.yearVehicle,
        modelVehicle: req.body.modelVehicle
    };

    Relacao.create(relacao)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao tentar adicionar/criar este veículo no sistema."
      });
    });
};

exports.findAll = (req, res) => {
    const nameFactory = req.query.nameFactory;
    var condition = nameFactory ? { nameFactory: { [Op.iLike]: `%${nameFactory}%` } } : null;
  
    Relacao.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro ocorreu ao tentar pesquisar os veículos."
        });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Relacao.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Não foi possível encontrar o veículo de id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar encontrar o veículo de id=" + id
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Relacao.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "O veículo foi atualizado."
          });
        } else {
          res.send({
            message: `Não foi possivel atualizar o veículo de id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar atualizar o item de id=" + id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Relacao.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "O veículo foi apagado com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possivel apagar o veículo de id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar apagar o veículo de id=" + id
        });
      });
};

exports.deleteAll = (req, res) => {
    Relacao.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} veículos foram apagados com sucesso.` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Algum erro ocorreu ao tentar apagar todos os veículos."
          });
        });
};




