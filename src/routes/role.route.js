const express = require("express");
const router = express.Router();
const RoleController = require("../controllers/role.controller");

router.post("/", RoleController.createRole);
router.get("/", RoleController.getRoles);

module.exports = router;