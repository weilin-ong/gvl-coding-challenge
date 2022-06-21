import { getAllOrders } from '../../service-api/api';
import { Navbar, OrderItem } from '../../components';
import { useEffect, useState } from 'react';
import './Order-page.styles.scss';

export default function OrderPage() {
  const [allOrders, setAllOrders] = useState(null);

  useEffect(() => {
    getAllOrders().then((data) => setAllOrders(data));
  }, []);

  const ann1 = <div className='announcement'>No order yet.</div>;
  const ann2 = <div className='announcement'>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className='order-title'>
        <h4>reference no.</h4>
        <h4>total cost</h4>
        <h4>status</h4>
        <h4>refund</h4>
      </div>
      {allOrders ? (
        allOrders.length > 0 ? (
          <>
            {allOrders.map((order) => (
              <OrderItem key={order._id} order={order} />
            ))}
          </>
        ) : (
          ann2
        )
      ) : (
        ann1
      )}
    </div>
  );
}
