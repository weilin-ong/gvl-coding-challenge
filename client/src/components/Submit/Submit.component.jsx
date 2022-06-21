import { useContext, useState } from 'react';
import { OrdersContext } from '../../contexts/order.context';
import { completeOrder } from '../../service-api/api';
import './Submit.styles.scss';

export default function Submit() {
  const { totalPrice, setToggleSubmit, orderID, setOrder, setOrderID } =
    useContext(OrdersContext);
  const [inputVal, setInputVal] = useState({
    paidAmount: 0,
    totalPrice: totalPrice,
    paymentMethod: 'cash',
    change: 0,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputVal((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputVal.paidAmount >= totalPrice) {
      completeOrder(orderID, {
        paid_amount_cents: inputVal.paidAmount,
        payment_method: inputVal.paymentMethod,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      setToggleSubmit((prev) => !prev);
      setOrder([]);
      setOrderID('');
    }
    e.target.reset();
  }

  function handleClose() {
    setToggleSubmit((prev) => !prev);
    setInputVal();
  }

  return (
    <div className='submit-container'>
      <h2>checkout form</h2>
      <form onSubmit={handleSubmit}>
        <div className='submit-row'>
          <label htmlFor='paidAmount'>total paid amount (RM)</label>
          <input
            type='number'
            name='paidAmount'
            id='paidAmount'
            onChange={handleChange}
            value={inputVal.paidAmount}
          />
        </div>
        <div className='submit-row'>
          <label htmlFor='totalPrice'>total (RM)</label>
          <input
            type='number'
            name='totalPrice'
            id='totalPrice'
            value={inputVal.totalPrice}
            readOnly={true}
          />
        </div>
        <div className='submit-row'>
          <label htmlFor='paymentMethod'>payment method</label>
          <select
            name='paymentMethod'
            id='paymentMethod'
            onChange={handleChange}
            value={inputVal.paymentMethod}
          >
            <option value='cash'>cash</option>
            <option value='card'>debit/credit</option>
          </select>
        </div>
        <div className='submit-row'>
          <label htmlFor='change'>change (RM)</label>
          <input
            name='change'
            id='change'
            type='number'
            value={
              Math.round((inputVal.paidAmount - inputVal.totalPrice) * 100) /
              100
            }
            readOnly={true}
          />
        </div>
        <div className='submit-row'>
          <button onClick={handleClose} type='click'>
            close
          </button>
          <button type='submit'>submit</button>
        </div>
      </form>
    </div>
  );
}
