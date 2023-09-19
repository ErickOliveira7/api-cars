const db = require("../models");
const Item = db.items;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
          message: "O conteúdo não pode ser vazio!"
        });
        return;
    }

    const item = {
        name_factory: req.body.name_factory,
        address_factory: req.body.address_factory,
        year_vehicle: req.body.year_vehicle,
        model_vehicle: req.body.model_vehicle
    };

    Item.create(item)
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
    const name_factory = req.query.name_factory;
    var condition = name_factory ? { name_factory: { [Op.iLike]: `%${name_factory}%` } } : null;
  
    Item.findAll({ where: condition })
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

    Item.findByPk(id)
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

    Item.update(req.body, {
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

    Item.destroy({
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
    Item.destroy({
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



