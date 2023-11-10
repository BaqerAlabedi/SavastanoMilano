const express = require("express");
const cartRouter = express.Router();
const cartController = require("../Controller/cartController");

cartRouter.post("/:userId", cartController.addItemToCart);
cartRouter.get("/:userId", cartController.getCart);
cartRouter.patch("/:userId", cartController.decreaseQuantity);
cartRouter.delete("/:userId", cartController.removeItem);

module.exports = cartRouter;