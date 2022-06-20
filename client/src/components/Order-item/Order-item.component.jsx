import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrdersContext } from '../../contexts/order.context';
import { refundOrder } from '../../service-api/api';
import './Order-item.styles.scss';

export default function OrderItem({ order }) {
  const { _id, status, total_amount_cents, items } = order;
  const navigate = useNavigate();
  const { setOrder, setOrderID } = useContext(OrdersContext);
  const [btnStatus, setBtnStatus] = useState(status);

  function handleRefund() {
    refundOrder(_id)
      .then((res) => setBtnStatus(res.status))
      .catch((err) => console.log(err));
  }

  function handlePay() {
    navigate('/');
    setOrderID(_id);
    setOrder(items);
  }

  return (
    <div className='order-container'>
      <div className='order-summary'>
        <div>{_id}</div>
        <div>RM {total_amount_cents}</div>
        <div>{btnStatus}</div>
        {(status === 'completed' || status === 'cancelled') && (
          <button disabled={btnStatus === 'cancelled'} onClick={handleRefund}>
            {btnStatus === 'completed' ? 'refund' : 'refunded'}
          </button>
        )}
        {status === 'pending' && <button onClick={handlePay}>pay</button>}
      </div>
    </div>
  );
}
