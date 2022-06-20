import { Checkout, Navbar, Products, Submit } from '../../components';
import './Homepage.styles.scss';
import { useContext } from 'react';
import { OrdersContext } from '../../contexts/order.context';

export default function Homepage() {
  const { toggleSubmit } = useContext(OrdersContext);

  return (
    <>
      <Navbar />
      <main>
        <Checkout />
        <Products />
        {toggleSubmit && <Submit />}
      </main>
    </>
  );
}
