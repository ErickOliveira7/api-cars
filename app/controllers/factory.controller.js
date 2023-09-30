const db = require("../models");
const Factory = db.factory;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.nameFactory) {
        res.status(400).send({
          message: "O conteúdo não pode ser vazio!"
        });
        return;
    }

    const factory = {
        nameFactory: req.body.nameFactory,
        addressFactory: req.body.addressFactory,
        yearFactory: req.body.yearFactory
    };

    Factory.create(factory)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao tentar adicionar/criar este fabricante no sistema."
      });
    });
};

exports.findAll = (req, res) => {
    const nameFactory = req.query.nameFactory;
    var condition = nameFactory ? { nameFactory: { [Op.iLike]: `%${nameFactory}%` } } : null;
  
    Factory.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro ocorreu ao tentar pesquisar o fabricante/fabricantes."
        });
      });
};

exports.findAllAndCars = (req, res) => {

  Factory.findAll({
    include:'cars'
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao tentar pesquisar o fabricante e seus carros."
      });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Factory.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Não foi possível encontrar o fabricante de id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar encontrar o fabricante de id=" + id
        });
      });
};

exports.findOneAndCars = (req, res) => {
  const id = req.params.id;

  Factory.findByPk(id, {include: 'cars'})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não foi possível encontrar o fabricante de id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Algum erro ocorreu ao tentar encontrar o fabricante de id=" + id
      });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Factory.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "O fabricante foi atualizado."
          });
        } else {
          res.send({
            message: `Não foi possivel atualizar o fabricante de id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar atualizar o fabricante de id=" + id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Factory.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "O fabricante foi apagado com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possivel apagar o fabricante de id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar apagar o fabricante de id=" + id
        });
      });
};

exports.deleteAll = (req, res) => {
  Factory.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} fabricantes foram apagados com sucesso.` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Algum erro ocorreu ao tentar apagar todos os fabricantes."
          });
        });
};




