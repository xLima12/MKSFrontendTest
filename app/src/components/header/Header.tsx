"use client";

import styled from "styled-components";
import cart from "../../../../public/Vector.svg";
import ButtonCart from "../buttonCart/ButtonCart";

const Container = styled.header`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  padding: 0px 75px;
  width: 100%;
  height: 80px;
  background-color: rgba(15, 82, 186, 1);
`;

const Logo = styled.div`

`;

const Name = styled.span`
font-size: 40px;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
`;

const Text = styled.span`
font-size: 20px;
font-weight: 300;
color: rgba(255, 255, 255, 1);
`;

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

const StyledIcon = styled(cart)`
  width: 24px;
  height: 24px;
`;

const Label = styled.span`
  padding-left: 5px;
  text-align: center;
  color: #000;
`;

export default function Header() {

  return (
    <Container>
      <Logo>
        <Name>MKS </Name><Text>Sistemas</Text>
      </Logo>
      <ButtonCart />
    </Container>
  );
}
