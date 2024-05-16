"use client"

import styled from "styled-components";
import MyIcon from "../../../../public/shopping-bag.svg";

interface ButtonProps {
    name: string;
    addToCart: () => void;
}

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 0px 0px 8px 8px;
  background-color: rgba(15, 82, 186, 1);
`;

const StyledIcon = styled(MyIcon)`
  width: 24px;
  height: 24px;
  padding: 4px;
`;

const Label = styled.span`
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;

export default function Button({name, addToCart}: ButtonProps) {
  return (
    <>
      <ButtonArea onClick={addToCart}>
        <StyledIcon />
        <Label>{name}</Label>
      </ButtonArea>
    </>
  );
}
