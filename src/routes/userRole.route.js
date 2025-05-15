const express = require("express");
const router = express.Router();
const UserRoleController = require("../controllers/userRole.controller");

router.post("/assign", UserRoleController.createUserRole);
router.get("/user/:userId", UserRoleController.getUserRoles);

module.exports = router;