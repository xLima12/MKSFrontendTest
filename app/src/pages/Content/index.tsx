"use client";

import { useQuery } from "react-query";
import CardProduct from "../../components/cardProduct/CardProduct";
import styled from "styled-components";
import Skeleton from "../../components/skeleton/Skeleton";
import { useCart } from "../../context/CartContext";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  quantity: number;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
  width: 938px;
  height: 601px;
  margin: 20px;
  justify-content: center;
  justify-itens: center;
  align-itens: center;
  padding-left: 400px;
`;

const Lista = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
`;

const ItemList = styled.li`
  display: flex;
  decoration: none;
`;

const fetchProducts = async () => {
  const res = await fetch(
    `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC`
  );
  return res.json();
};

export default function Content() {
  const { data, error, isLoading } = useQuery("products", fetchProducts);

  const { addToCart } = useCart();

  if (isLoading)
    return (
      <Skeleton />
    );

  if (error) return <div>Error</div>;

  return (
    <Container>
      <Lista>
        {data.products &&
          data.products.map((product: Product) => (
            <ItemList key={product.id}>
              <CardProduct
                id={product.id}
                name={product.name}
                brand={product.brand}
                description={product.description}
                photo={product.photo}
                price={product.price}
                onAddToCart={() => addToCart(product)}
              />
            </ItemList>
          ))}
      </Lista>
    </Container>
  );
}
