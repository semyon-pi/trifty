'use client'
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart items from cookies on component mount
    useEffect(() => {
        const savedCartItems = Cookies.get('cartItems');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
    }, []);

    // Save cart items to cookies whenever it changes
    useEffect(() => {
        Cookies.set('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Add item to the cart
    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    // Remove item from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== itemId)
        );
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };
