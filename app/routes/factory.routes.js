module.exports = app => {
    const factory = require("../controllers/factory.controller");

    var router = require("express").Router();

    router.post("/", factory.create);

    router.get("/", factory.findAll);

    router.get("/:id", factory.findOne);

    router.put("/:id", factory.update);

    router.delete("/:id", factory.delete);

    router.delete("/", factory.deleteAll);

    app.use('/api/factory', router);
};