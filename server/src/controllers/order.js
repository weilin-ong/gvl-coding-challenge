const Order = require('../models/model');

async function getAllOrders(req, res) {
  try {
    const orders = await Order.find();
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function getOneOrder(req, res) {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function createOneOrder(req, res) {
  try {
    const order = await Order.create(req.body);
    return res.status(200).json(order._id);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function completeOrder(req, res) {
  try {
    const { id } = req.params;
    const { paid_amount_cents, payment_method } = req.body;
    const { total_amount_cents } = await Order.findById(id);

    //if paid amount is lesser
    if (total_amount_cents > paid_amount_cents)
      return res
        .status(400)
        .send({ error: '400', message: 'Incorrect paid amount' });

    //update to paid
    await Order.findByIdAndUpdate(
      id,
      {
        status: 'completed',
        transaction: {
          paid_amount_cents,
          payment_method,
          status: 'paid',
        },
      },
      { new: true }
    );

    return res.status(200).json({ status: 'completed' });
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function refundOrder(req, res) {
  try {
    const { id } = req.params;
    const { total_amount_cents } = await Order.findById(id);
    const { paid_amount_cents, payment_method } = req.body;
    //check if amounts are aligned
    if (total_amount_cents !== paid_amount_cents)
      return res
        .status(400)
        .send({ error: '400', message: 'Incorrect refund amount' });

    //update to refund
    await Order.findByIdAndUpdate(
      id,
      {
        status: 'cancelled',
        transaction: {
          paid_amount_cents: 0,
          payment_method,
          status: 'refunded',
        },
      },
      { new: true }
    );
    return res.status(200).json({ status: 'cancelled' });
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  getAllOrders,
  getOneOrder,
  createOneOrder,
  completeOrder,
  refundOrder,
};
