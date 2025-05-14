"use strict";
function processOrder(order) {
    if (!order.isInStock) {
        return "Item is out of stock.";
    }
    if (!order.isPaid) {
        return "Payment pending. Cannot process order.";
    }
    let days = 0;
    switch (order.shippingType) {
        case "standard":
            if (order.deliveryLocation == "local") {
                days = 3;
            }
            else if (order.deliveryLocation == "national") {
                days = 5;
            }
            else if (order.deliveryLocation == "international") {
                days = 10;
            }
            break;
        case "express":
            days = 2;
            break;
        case "overnight":
            days = 1;
            break;
    }
    return `Order processed. Estimated delivery in ${days} days.`;
}
let order = {
    isPaid: true,
    isInStock: true,
    shippingType: "express",
    deliveryLocation: "local",
};
console.log(processOrder(order));
