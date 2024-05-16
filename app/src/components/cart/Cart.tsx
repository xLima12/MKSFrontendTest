"use client";

import styled from "styled-components";
import CardItem from "../cardItem/CardItem";
import { useCart } from "../../context/CartContext";

interface CartProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = styled.div<{ isOpen: boolean }>`
  position: fixed;
  right: ${(props) => (props.isOpen ? "0" : "-100%")};
  top: 0;
  width: 400px;
  height: 100%;
  background-color: rgba(15, 82, 186, 1);
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transition: right 0.3s ease-in-out;
  z-index: 1000;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ButtonArea = styled.div`
  display: flex;
  position: absolute;
  bottom: 0px;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  width: 100%;
  height: 60px;
  border: none;
  background-color: rgba(0, 0, 0, 1);
`;

const LabelButton = styled.span`
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;

const LabelTotal = styled.span`
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  font-weight: 700;
`;

const LabelPriceTotal = styled.span`
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-size: 28px;
  font-weight: 700;
`;

const TotalCart = styled.div`
  display: flex;
  position: absolute;
  bottom: 55px;
  padding: 15px;
  width: 100%;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ListProduct = styled.ul`
  display: flex;
  padding: 15px;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.li`
  display: flex;
  decoration: none;
`;

const Title = styled.span`
  width: 50%;
  height: 60px;
  color: rgba(255, 255, 255, 1);
  font-size: 27px;
  font-weight: 700;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: 400;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 1);
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: 100%;
  height: 100px;
`;

export default function Cart({ isOpen, toggleSidebar }: CartProps) {
  const { cart, removeFromCart } = useCart();
  const totalValue = cart.reduce((total, product) => total + Number(product.price) * product.quantity, 0);

  return (
    <>
      <Overlay isOpen={isOpen} onClick={toggleSidebar} />
      <Sidebar isOpen={isOpen}>
        <Container>
          <Header>
            <Title>
              Carrinho<br></br>de Compras
            </Title>
            <CloseButton onClick={toggleSidebar}>X</CloseButton>
          </Header>
          <ListProduct>
            {cart.map((product) => (
              <ListItem key={product.id}>
                <CardItem
                  id={product.id}
                  name={product.name}
                  brand={product.brand}
                  description={product.description}
                  photo={product.photo}
                  price={product.price}
                  quantity={product.quantity}
                  removeFromCart={() => removeFromCart(product.id)}
                />
              </ListItem>
            ))}
          </ListProduct>
          <TotalCart>
            <LabelTotal>Total:</LabelTotal>
            <LabelPriceTotal>R${totalValue.toFixed(2)}</LabelPriceTotal>
          </TotalCart>
          <ButtonArea>
            <LabelButton>FINALIZAR COMPRA</LabelButton>
          </ButtonArea>
        </Container>
      </Sidebar>
    </>
  );
}
