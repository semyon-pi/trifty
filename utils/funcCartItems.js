export function countItemsAndTotalPrice(cartItems) {
    let itemCount = cartItems.length;
    let totalPrice = 0;

    for (let i = 0; i < itemCount; i++) {
        totalPrice += cartItems[i].price;
    }

    return {
        itemCount: itemCount,
        totalPrice: totalPrice
    };
}