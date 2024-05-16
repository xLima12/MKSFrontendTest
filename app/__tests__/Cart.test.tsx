import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CartProvider } from '../src/context/CartContext';
import Cart from '../src/components/cart/Cart';

describe('Cart', () => {
  it('renders Cart component', () => {
    const { getByText } = render(
      <CartProvider>
        <Cart isOpen={true} toggleSidebar={() => {}} />
      </CartProvider>
    );

    const titleElement = getByText('Carrinho\nde Compras');
    expect(titleElement).toBeInTheDocument();
  });

  it('calls removeFromCart when close button is clicked', () => {
    const removeFromCart = jest.fn();

    const { getByTestId } = render(
      <CartProvider>
        <Cart isOpen={true} toggleSidebar={() => {}} />
      </CartProvider>
    );

    const closeButton = getByTestId('close-button');
    fireEvent.click(closeButton);

    expect(removeFromCart).toHaveBeenCalled();
  });
});