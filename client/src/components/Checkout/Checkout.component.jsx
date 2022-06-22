import { useContext, useEffect, useState } from 'react';
import { OrdersContext } from '../../contexts/order.context';
import { CheckoutItem } from '../';
import { createOrder, getOneOrder, updateOrder } from '../../service-api/api';
import './Checkout.styles.scss';

export default function Checkout() {
  const [existingOrder, setExistingOrder] = useState(null);

  const {
    order,
    setOrder,
    totalItems,
    totalPrice,
    subTotal,
    setToggleSubmit,
    setOrderID,
    orderID,
  } = useContext(OrdersContext);

  useEffect(() => {
    if (orderID) {
      getOneOrder(orderID).then((orderDetails) =>
        setExistingOrder(orderDetails)
      );
    }
  }, [orderID]);

  function handleCheckout() {
    if (order.length !== 0) {
      //if order does not exist on server
      if (!orderID) {
        createOrder({ total_amount_cents: totalPrice, items: order })
          .then((id) => setOrderID(id))
          .catch((err) => console.log(err));
      }

      //if order already exist on server and the order items are different
      if (
        orderID === existingOrder._id &&
        totalPrice !== existingOrder.total_amount_cents
      ) {
        //update order
        updateOrder(orderID, { total_amount_cents: totalPrice, items: order })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }
      setToggleSubmit((prev) => !prev);
    }
  }

  function handleCancel() {
    setOrder([]);
  }

  return (
    <div className='checkout-container'>
      <h2>POS Cashier</h2>
      <div className='checkout-summary'>
        <div>product</div>
        <div>price(RM)</div>
        <div>quantity</div>
        <div>cost(RM)</div>
      </div>
      {order.map((item) => (
        <CheckoutItem key={item.id || item._id} item={item} />
      ))}
      <div className='checkout-summary'>
        <div>subtotal</div>
        <div>RM {subTotal} </div>
      </div>
      <div className='checkout-summary'>
        <div>no. of items</div>
        <div>{totalItems}</div>
      </div>
      <div className='checkout-summary'>
        <div>tax</div>
        <div>6%</div>
      </div>
      <div className='checkout-summary'>
        <div>service charge</div>
        <div>-</div>
      </div>
      <div className='checkout-summary'>
        <div>total</div>
        <div>RM {totalPrice}</div>
      </div>
      <div className='checkout-buttons'>
        <button onClick={handleCancel}>cancel</button>
        <button onClick={handleCheckout}>checkout</button>
      </div>
    </div>
  );
}
