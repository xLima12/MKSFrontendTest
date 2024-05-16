"use client";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Content from "../pages/Content";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartProvider } from "../context/CartContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-itens: center;
  justify-content: center;
  align-itens: center;
`;

const queryCliente = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryCliente}>
      <CartProvider>
        <Container>
          <Header />
          <Content />
          <Footer />
        </Container>
      </CartProvider>
    </QueryClientProvider>
  );
}
