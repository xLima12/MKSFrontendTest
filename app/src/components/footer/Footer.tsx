"use client";

import styled from "styled-components";

const Container = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%
    height: 34px;
    background: rgba(238, 238, 238, 1);
`;

export default function Footer() {
  return (
    <Container>
      <span>MKS Sistemas &copy; Todos os direitos reservados</span>
    </Container>
  );
}
