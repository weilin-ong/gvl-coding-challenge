import { useContext } from 'react';
import { OrdersContext } from '../../contexts/order.context';
import './Checkout-item.styles.scss';

export default function CheckoutItem({ item }) {
  const { cost, quantity, name } = item;

  const { addItemToOrder, removeItemToOrder } = useContext(OrdersContext);

  return (
    <div className='checkout-summary'>
      <div>{name}</div>
      <div>{cost}</div>
      <div className='quantity'>
        <div
          className='quantity-control'
          onClick={() => removeItemToOrder(item)}
        >
          ➖
        </div>
        <div>{quantity}</div>
        <div className='quantity-control' onClick={() => addItemToOrder(item)}>
          ➕
        </div>
      </div>
      <div>{quantity * cost}</div>
    </div>
  );
}
