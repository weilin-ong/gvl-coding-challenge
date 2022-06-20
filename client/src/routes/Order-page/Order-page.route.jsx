import { getAllOrders } from '../../service-api/api';
import { Navbar, OrderItem } from '../../components';
import { useEffect, useState } from 'react';
import './Order-page.styles.scss';

export default function OrderPage() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    getAllOrders().then((data) => setAllOrders(data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className='order-title'>
        <div>reference no.</div>
        <div>total cost</div>
        <div>status</div>
        <div>refund</div>
      </div>
      {allOrders.map((order) => (
        <OrderItem key={order._id} order={order} />
      ))}
    </div>
  );
}
