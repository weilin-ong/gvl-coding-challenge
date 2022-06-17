const { Router } = require('express');
const router = Router();
const {
  getAllOrders,
  getOneOrder,
  createOneOrder,
  completeOrder,
  refundOrder,
} = require('./controllers/order');

router.get('/allOrders', getAllOrders);
router.get('/oneOrder/:id', getOneOrder);
router.post('/oneOrder', createOneOrder);
router.put('/oneOrder/:id/paid', completeOrder);
router.put('/oneOrder/:id/refund', refundOrder);

module.exports = router;
