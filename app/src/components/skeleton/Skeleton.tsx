"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

const SkeletonContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
  width: 938px;
  height: 601px;
  margin: 20px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding-left: 400px;
`;

const SkeletonCard = styled(motion.div)`
  width: 218px;
  height: 285px;
  border: none;
  border-radius: 8px;
  background-color: gray;
  margin: 0;
`;

const SkeletonCards = () => {
  return (
    <SkeletonContainer>
      {[...Array(8)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </SkeletonContainer>
  );
};

export default SkeletonCards;