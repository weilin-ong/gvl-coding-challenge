const { mongoose } = require('.');

const orderItemSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const transactionSchema = new mongoose.Schema({
  payment_method: {
    type: String,
    required: true,
  },
  paid_amount_cents: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'pending',
  },
});

const orderSchema = new mongoose.Schema({
  reference_no: {
    type: String,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  service_charge: {
    type: Number,
    required: true,
  },
  total_amount_cents: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'pending',
  },
  items: [orderItemSchema],
  transaction: transactionSchema,
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;
