import { createContext, useState, useEffect } from 'react';
// import products from '../mock-data/product-data.json';

const defaultVal = {
  order: [],
  addItemToOrder: function () {},
  removeItemToOrder: function () {},
  subTotal: 0,
  totalItem: 0,
  totalPrice: 0,
  toggleSubmit: false,
  setToggleSubmit: function () {},
};
export const OrdersContext = createContext(defaultVal);

function addItem(orderItems, product) {
  //check if product already in order
  const foundItem = orderItems.find((item) => item.id === product.id);
  //if found, increase quantity
  if (foundItem) {
    return orderItems.map((item) =>
      item.id === foundItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  //else, add to order
  return [...orderItems, { ...product, quantity: 1 }];
}

function removeItem(orderItems, product) {
  const foundItem = orderItems.find((item) => item.id === product.id);
  //if quantity is 1, remove item from order
  if (foundItem.quantity === 1) {
    return orderItems.filter((item) => item.id !== foundItem.id);
  }
  //else, decrease quantity
  return orderItems.map((item) =>
    item.id === foundItem.id
      ? { ...foundItem, quantity: foundItem.quantity - 1 }
      : item
  );
}

export function OrderProvider({ children }) {
  const [order, setOrder] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [toggleSubmit, setToggleSubmit] = useState(false);

  function addItemToOrder(productItem) {
    setOrder((prevOrder) => addItem(prevOrder, productItem));
  }

  function removeItemToOrder(productItem) {
    setOrder((prevOrder) => removeItem(prevOrder, productItem));
  }

  useEffect(() => {
    const newTotalItems = order.reduce((acc, curr) => acc + curr.quantity, 0);

    setTotalItems(newTotalItems);
  }, [order]);

  useEffect(() => {
    const newSubTotal = order.reduce(
      (acc, curr) => acc + curr.cost * curr.quantity,
      0
    );

    setSubTotal(newSubTotal.toFixed(2));
  }, [order]);

  useEffect(() => {
    const newTotalPrice =
      Number(subTotal) + Math.round(subTotal * 0.06 * 100) / 100;

    setTotalPrice(newTotalPrice);
  }, [subTotal]);

  const value = {
    order,
    addItemToOrder,
    removeItemToOrder,
    totalItems,
    subTotal,
    totalPrice,
    toggleSubmit,
    setToggleSubmit,
  };

  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
}
