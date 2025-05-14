# Online Order Processor
Processes e-commerce orders by checking payment status, stock availability, and delivery options with estimated shipping time.




---

##  Problem Statement

When a customer places an order, the system must check the status of various conditions and return an appropriate message based on business rules.

---

## Features

- Checks if the order is paid  
- Verifies item stock availability  
- Calculates delivery time based on shipping type and delivery location  
- Returns user-friendly messages indicating order status  

---

## Business Logic

1. If the order is **not paid**, return:  
   `"Payment pending. Cannot process order."`

2. If the item is **out of stock**, return:  
   `"Item is out of stock."`

3. If both checks pass, estimate delivery time based on:

   - **Shipping Type: `standard`**
     - `local`: 3 days  
     - `national`: 5 days  
     - `international`: 10 days  
   - **Shipping Type: `express`**
     - All locations: 2 days  
   - **Shipping Type: `overnight`**
     - All locations: 1 day  

4. Return a message like:  
   `"Order processed. Estimated delivery in X days."`

---

## Sample Input

```js
const order = {
  isPaid: true,
  isInStock: true,
  shippingType: "standard",
  deliveryLocation: "national"
};

**## Sample Output**
Order processed. Estimated delivery in 5 days.


