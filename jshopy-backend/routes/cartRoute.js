import express from "express";
import { addToCart, updateUserCart, getUserCart } from "../controllers/cartController.js";
import authUser from "../middleware/userAuth.js";

const cartRouter = express.Router();

cartRouter.post('/add', authUser, addToCart);
cartRouter.post('/get', authUser, getUserCart);
cartRouter.post('/update', authUser, updateUserCart);

export default cartRouter;