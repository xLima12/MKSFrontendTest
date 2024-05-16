"use client"

import styled from "styled-components";
import Image from "next/image";
import { useCart } from "../../context/CartContext";
import QuantityButton from "../quantityButton/QuantityButton";

interface ProductCart {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
    quantity: number;
    removeFromCart: () => void;
}

const Container = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    width: 350px;
    height: 100px;
    border: none;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 1);
`;

const Img = styled.div`
  display: flex;
  overflow: hidden;
  padding: 15px;
  width: 25%;
  height: auto;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const LabelProduct = styled.span`
    font-size: 13px;
    font-weight: 400;
`;

const LabelPrice = styled.span`
    font-size: 17px;
    font-weight: 700;
    padding-right: 10px;
`;

const CloseButton = styled.div`
    display: flex;
    position: relative;
    top: -45px;
    left: 335px;
    justify-content: center;
    color: rgba(255, 255, 255, 1);
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    width: 22px;
    height: 18px;
    border: none;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 1);
`;

export default function CardItem({id, name, brand, description, photo, price, quantity, removeFromCart}: ProductCart) {
    const {updateQuantity} = useCart();

    const handlerIncrease = () => {
        updateQuantity(id, quantity + 1);
    }

    const handlerDecrease = () => {
        if(quantity > 1) {
            updateQuantity(id, quantity - 1);
        }
    }

    return (
        <Container>
            <CloseButton onClick={removeFromCart}>x</CloseButton>
            <Img>
                <StyledImage src={photo} layout="responsive" width={30} height={30} alt={name} />
            </Img>
            <LabelProduct>{name}</LabelProduct>
            <QuantityButton quantity={quantity} onIncrease={handlerIncrease} onDecrease={handlerDecrease} />
            <LabelPrice>R${price * quantity}</LabelPrice>
        </Container>
    )
}