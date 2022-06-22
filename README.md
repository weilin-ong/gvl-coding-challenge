# gvl-coding-challenge

Web-view for a cashier POS system that allow user to create, update, complete and refund an order. User can also keep track of all orders.

Live site: https://pos-cashier.netlify.app/

## How to use

### Homepage

1. Start with selecting the product on the right to add it to the cart on the left.
2. Increase or decrease the quantity of the selected products by clicking "-" and "+" buttons under "Quantity".
3. Hit "Cancel" button to reset the order.
4. Hit "Checkout" button to create a new order if the order is not existed on server yet.
5. Checkout Form pops up, user to input the "Total Paid Amount" and select "Payment Method". "Change" indicates the amount of "Total Paid Amount" minus "Total" and is calculated automatically.
6. Hit "Close" button and the order's status will be shown as "pending" on Order Summary page. Hit "Submit" button to complete the order.

### Order Summary

1. When the status of the order is "pending", hit "Pay" and you will be redirected to Homepage with the details of the order. You may update and/or complete the order.
2. When the status of the order is "completed", you have the option to refund the amount of the order. Hit "Refund" button and the status will be changed to "Cancelled". The button will also be disabled and updated with the word "Refunded".
