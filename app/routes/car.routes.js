module.exports = app => {
    const cars = require("../controllers/car.controller");

    var router = require("express").Router();

    router.post("/", cars.create);

    router.get("/", cars.findAll);

    router.get("/news", cars.findAllNews);

    router.get("/manuals", cars.findAllManuals);

    router.get("/:id", cars.findOne);

    router.put("/:id", cars.update);

    router.delete("/:id", cars.delete);

    router.delete("/", cars.deleteAll);

    app.use('/api/cars', router);
};