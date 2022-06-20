import products from '../../mock-data/product-data.json';
import { useContext } from 'react';
import { OrdersContext } from '../../contexts/order.context';
import './Products.styles.scss';

export default function Products() {
  const { addItemToOrder } = useContext(OrdersContext);

  return (
    <div className='products-container'>
      {products.map((product) => (
        <div
          key={product.id}
          className='product'
          onClick={() => addItemToOrder(product)}
        >
          {product.name}
        </div>
      ))}
    </div>
  );
}
