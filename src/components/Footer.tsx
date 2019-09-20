import styled from "@emotion/styled";
import { Theme } from "../theme";

export type FooterProps = {
  theme?: Theme;
};

export const Footer = styled.div<FooterProps>`
  padding-top: 20px;
  color: #fff;
  background-color: #0f2d4c;
  min-height: 20vh;
  position: relative;
  display: flex;
  flex-direction: row;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
