// Content.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { useQuery } from 'react-query';
import Content from '../src/components/content/Content';

jest.mock('react-query');

describe('Content', () => {
  it('renders Content component with data', async () => {
    const mockData = {
      products: [
        {
          id: 1,
          name: 'Product 1',
          brand: 'Brand 1',
          description: 'Description 1',
          photo: 'photo1.jpg',
          price: 10.99,
          quantity: 5,
        },
        // Add more mock products as needed
      ],
    };

    useQuery.mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
    });

    const { getByText } = render(<Content />);

    // Wait for the products to be rendered
    await waitFor(() => {
      const productElement = getByText('Product 1');
      expect(productElement).toBeInTheDocument();
    });
  });

  it('renders Content component while loading', () => {
    useQuery.mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    });

    const { getByTestId } = render(<Content />);

    const skeletonElement = getByTestId('skeleton');
    expect(skeletonElement).toBeInTheDocument();
  });

  it('renders Content component with error message', () => {
    useQuery.mockReturnValue({
      data: null,
      error: 'Error fetching data',
      isLoading: false,
    });

    const { getByText } = render(<Content />);

    const errorElement = getByText('Error');
    expect(errorElement).toBeInTheDocument();
  });
});
