module.exports = app => {
    const relacao = require("../controllers/relacao.controller");

    var router = require("express").Router();

    router.post("/", relacao.create);

    router.get("/", relacao.findAll);

    router.get("/:id", relacao.findOne);

    router.put("/:id", relacao.update);

    router.delete("/:id", relacao.delete);

    router.delete("/", relacao.deleteAll);

    app.use('/api/relacao', router);
};