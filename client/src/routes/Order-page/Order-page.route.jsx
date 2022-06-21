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
        <h4>reference no.</h4>
        <h4>total cost</h4>
        <h4>status</h4>
        <h4>refund</h4>
      </div>
      {allOrders.length ? (
        allOrders.map((order) => <OrderItem key={order._id} order={order} />)
      ) : (
        <div>No order yet.</div>
      )}
    </div>
  );
}
