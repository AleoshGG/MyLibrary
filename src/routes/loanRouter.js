const express = require("express");
const router = express.Router();
const loanController = require("../controllers/loanController.js");

router.post("/add", loanController.addLoan);
router.get("/", loanController.getAll);
router.get("/expired", loanController.getLoansExpired)
router.get("/reader/:id_reader", loanController.getLoansOfReader);
router.delete("/delete/:id_reader", loanController.deleteLoan);
router.put("/status", loanController.setStatus);

module.exports = router;