const baseURL = 'http://127.0.0.1:3001';

const headers = { 'Content-Type': 'application/json' };

function apiHelper(method, route, body) {
  return fetch(`${baseURL}/${route}`, {
    method: method,
    credentials: 'include',
    mode: 'cors',
    headers: headers,
    body: body,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

const body = (data) => JSON.stringify(data);

//get all orders
export function getAllOrders() {
  return apiHelper('GET', 'allOrders');
}

//get 1 order
export function getOneOrder(id) {
  return apiHelper('GET', `oneOrder/${id}`);
}

//create order
export function createOrder(order) {
  return apiHelper('POST', 'oneOrder', body(order));
}

//complete order
export function completeOrder(id, transaction) {
  return apiHelper('PUT', `oneOrder/${id}/paid`, body(transaction));
}

//refund order
export function refundOrder(id, refund) {
  return apiHelper('PUT', `oneOrder/${id}/refund`, body(refund));
}
