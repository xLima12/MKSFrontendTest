import styled from "styled-components";

interface QuantityButtonProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    width: 50px;
    height: 40px;
`;

const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  height: 20px;
  border: 1px solid rgba(191, 191, 191, 1);
  border-radius: 5px;
`;

const ButtonRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 20px;
  font-size: 8px;
  font-weigth: 400;
  cursor: pointer;
  border-right: 1px solid rgba(191, 191, 191, 1);
  &:hover {
    border-radius: 5px 0px 0px 5px;
    background-color: rgba(191, 191, 191, 2);
  }
`;

const ButtonLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 20px;
  font-size: 8px;
  font-weigth: 400;
  cursor: pointer;
  border-left: 1px solid rgba(191, 191, 191, 1);
  &:hover {
    border-radius: 0px 5px 5px 0px;
    background-color: rgba(191, 191, 191, 2);
  }
`;

const LabelQtd = styled.label`
  font-size: 8px;
  font-weigth: 400;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 5px;
  width: 20px;
  height: 20px;
  font-size: 8px;
  font-weigth: 400;
`;

export default function QuantityButton({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityButtonProps) {
  return (
    <Container>
      <LabelQtd>Qtd:</LabelQtd>
      <ContainerButton>
        <ButtonRight onClick={onDecrease} aria-disabled={quantity <= 1}>
          -
        </ButtonRight>
        <Label>{quantity}</Label>
        <ButtonLeft onClick={onIncrease}>+</ButtonLeft>
      </ContainerButton>
    </Container>
  );
}
