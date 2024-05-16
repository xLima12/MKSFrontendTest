"use client";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Content from "../components/content/Content";
import { styled, StyleSheetManager } from "styled-components";
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

export default function HomePage() {
  return (
    <QueryClientProvider client={queryCliente}>
      <CartProvider>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isOpen'}>
          <Container>
            <Header />
            <Content />
            <Footer />
          </Container>
        </StyleSheetManager>
      </CartProvider>
    </QueryClientProvider>
  );
}
