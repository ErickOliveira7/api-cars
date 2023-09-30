module.exports = app => {
    const factory = require("../controllers/factory.controller");

    var router = require("express").Router();

    router.post("/", factory.create);

    router.get("/", factory.findAll);

    router.get("/cars", factory.findAllAndCars);

    router.get("/:id", factory.findOne);

    router.get("/cars/:id", factory.findOneAndCars);

    router.put("/:id", factory.update);

    router.delete("/:id", factory.delete);

    router.delete("/", factory.deleteAll);

    app.use('/api/factories', router);
};