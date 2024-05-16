"use client";

import { useState } from "react";
import styled from "styled-components";
import MyIcon from "../../../../public/Vector.svg";
import Cart from "../cart/Cart";
import { useCart } from "../../context/CartContext";

const Button = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  width: 90px;
  height: 45px;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const StyledIcon = styled(MyIcon)`
  width: 24px;
  height: 24px;
`;

const Label = styled.span`
  padding-left: 5px;
  text-align: center;
  color: #000;
`;

export default function ButtonCart() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { cart } = useCart();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const totalItems = cart.length;

  return (
    <>
      <Button onClick={toggleSidebar}>
        <StyledIcon />
        <Label>{totalItems}</Label>
      </Button>
      <Cart isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}
