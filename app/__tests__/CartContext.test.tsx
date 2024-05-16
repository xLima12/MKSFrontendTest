import React from 'react';
import { render, act } from '@testing-library/react';
import { CartProvider, useCart } from '../src/context/CartContext';

describe('CartContext', () => {
  it('addToCart adds a product to the cart', () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });

    const product = {
      id: 1,
      name: 'Product 1',
      brand: 'Brand 1',
      description: 'Description 1',
      photo: 'photo1.jpg',
      price: 10.99,
      quantity: 1,
    };

    act(() => {
      result.current.addToCart(product);
    });

    expect(result.current.cart).toContainEqual(product);
  });

  it('removeFromCart removes a product from the cart', () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });

    const product = {
      id: 1,
      name: 'Product 1',
      brand: 'Brand 1',
      description: 'Description 1',
      photo: 'photo1.jpg',
      price: 10.99,
      quantity: 1,
    };

    act(() => {
      result.current.addToCart(product);
    });

    act(() => {
      result.current.removeFromCart(product.id);
    });

    expect(result.current.cart).not.toContainEqual(product);
  });

  it('updateQuantity updates the quantity of a product in the cart', () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });

    const product = {
      id: 1,
      name: 'Product 1',
      brand: 'Brand 1',
      description: 'Description 1',
      photo: 'photo1.jpg',
      price: 10.99,
      quantity: 1,
    };

    act(() => {
      result.current.addToCart(product);
    });

    act(() => {
      result.current.updateQuantity(product.id, 5);
    });

    const updatedProduct = {
      ...product,
      quantity: 5,
    };

    expect(result.current.cart).toContainEqual(updatedProduct);
  });
});
