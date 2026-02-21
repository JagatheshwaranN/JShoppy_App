import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Place order with COD
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData);
        await newOrder.save();
        await userModel.findByIdAndUpdate(userId, { cartData: {} });
        res.json({
            success: true,
            message: 'Order Placed'
        })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Place order with Stripe
const placeOrderStripe = async (req, res) => {

}

// Place order with Razorpay
const placeOrderRazorpay = async (req, res) => {

}

// All order data for Admin Panel
const allOrders = async (req, res) => {

}

// User order data for frontend
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({ userId });
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Update order status from Admin Panel
const updateOrderStatus = async (req, res) => {

}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateOrderStatus };