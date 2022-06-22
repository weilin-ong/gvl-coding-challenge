# gvl-coding-challenge

Web-view for a cashier POS system that allow user to create, complete and refund an order, and also to keep track all orders.

Live site: https://pos-cashier.netlify.app/

## How to use

### Homepage

1. Start with selecting the product on the right to add it to the cart on the left.
2. Increase or decrease the quantity of the selected products by clicking "-" and "+" buttons under "Quantity".
3. Hit "Cancel" button to reset the order.
4. Hit "Checkout" button to create a new order.
5. Checkout Form pops up, hit close and the order's status will be shown as "pending" on Order Summary page. Hit Submit to complete the order.

### Order Summary

1. When the status of the order is "pending", hit "Pay" and you will be redirected to Homepage with the details of the order. You may update and/or complete the order.
2. When the status of the order is "completed", you have the option to refund the amount of the order. Hit "Refund" and the status turns "Cancelled" and the button is disabled with the word "Refunded".
