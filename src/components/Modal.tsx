import styled from "@emotion/styled";
import { Theme } from "../theme";
import React, { MouseEvent } from "react";
import Close from "./svg/Close";

export type ModalProps = {
  theme?: Theme;
  onClose: Function;
  children: any;
  open: boolean;
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

const ModalBackdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 998;
`;

const ModalBox = styled.div`
  position: absolute;
  left: 0;
  top: 80px;
  right: 0;
  bottom: 0;
  background-color: #fefefe;
  border-radius: 4px;
  box-shadow: 1px 1px 5px rgba(157, 157, 157, 0.4);
  z-index: 9999999999;

  @media (min-width: 768px) {
    & {
      position: relative;
      width: 90%;
      max-width: 500px;
    }
  }
`;

const CloseButton = styled.button`
  color: #aaa;
  position: absolute;
  background: transparent;
  border: none;
  top: 0;
  right: 0;
  padding: 10px;
  width: 40px;
  height: 40px;
  outline: none;
`;

export const ModalBody = styled.div`
  padding: 30px;
`;

const ModalClose = styled(Close)`
  height: 20px;
  width: 20px;
  & path {
    fill: #aaa;
  }
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Modal = ({ children, open, onClose }: ModalProps) => {
  const handleClose = (e: MouseEvent) => {
    console.log("handleClose");
    e.preventDefault();
    console.log(onClose);
    onClose();
  };

  console.log(open);
  
  return open ? (
    <ModalContainer>
      <ModalBackdrop onClick={handleClose} />
      <ModalBox>
        <CloseButton onClick={handleClose}>
          <ModalClose />
        </CloseButton>
        {children}
      </ModalBox>
    </ModalContainer>
  ) : null;
};
