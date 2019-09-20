import styled from "@emotion/styled";
import { Theme } from "../theme";
import React from "react";
import { Card } from "./Card";

export type ModalProps = {
  theme?: Theme;
};

const ModalContainer = styled.div`
  position: fixed; /* Stay in place */
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  z-index: 900;
`;

const ModalBackdrop = styled.div``;

const ModalCard = styled(Card)`
`;

export const Modal = (props: ModalProps) => {
  return (
    <ModalContainer>
      <ModalBackdrop />
      <ModalCard>

      </ModalCard>
    </ModalContainer>
  );
};
