import styled from "@emotion/styled";
import { Theme } from "../theme";

export type ButtonProps = {
  theme?: Theme;
  primary?: boolean;
  secondary?: boolean;
  raised?: boolean;
  border?: boolean;
  children: any
};

const getColor = (props: ButtonProps) => {
  if (!props.theme) return "#555";

  if (props.primary) return props.theme.colors.primary;

  if (props.secondary) return props.theme.colors.secondary;

  return props.theme.colors.standard;
};

export const Button = styled.button<ButtonProps>`
  color: ${props => (props.raised ? "#fff" : getColor(props))};
  background-color: ${props =>
    props.raised ? getColor(props) : "transparent"};
  border: ${props => (props.border ? `2px solid ${getColor(props)}` : "none")};
  padding: ${props => (props.border ? "13px 30px" : "15px 32px")};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 4px;
  white-space: nowrap;
  font-family: "Roboto", sans-serif;
  margin-bottom: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
