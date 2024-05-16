"use client"

import Image from "next/image";
import styled from "styled-components";
import MyButton from "../button/Button";

interface CardProductProps {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
    onAddToCart: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-itens: center;
  justify-content: center;
  align-itens: center;
  width: 218px;
  height: 285px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.5);
`;

const Img = styled.div`
  display: flex;
  overflow: hidden;
  padding: 15px;
  width: 100%;
  height: auto;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const Title = styled.div`
  display: flex;
  widht: 100%;
  height: 40px;
  padding: 0px 15px;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.h4`
width: 60%;
  font-size: 16px;
  font-weight: 400;
`;

const Price = styled.span`
  display: flex;
  width: 40%;
  height: 26px;
  border: none;
  border-radius: 8px;
  background-color: rgba(55, 55, 55, 1);
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
`;

const Description = styled.span`
  display: flex;
  padding: 15px;
  font-size: 10px;
  font-weight: 300;
`;

export default function CardProduct({id, name, brand, description, photo, price, onAddToCart}: CardProductProps) {
  
  return (
    <Container>
      <Img>
        <StyledImage
          src={photo}
          layout="responsive"
          width={111}
          height={138}
          alt={name}
        />
      </Img>
      <Title>
        <Name>{name}</Name>
        <Price>R${price}</Price>
      </Title>
      <Description>{description}</Description>
      <MyButton name="COMPRAR" addToCart={onAddToCart} />
    </Container>
  );
}
