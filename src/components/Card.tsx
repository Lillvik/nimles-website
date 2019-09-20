import styled from "@emotion/styled";
import { Theme } from "../theme";

export type CardProps = {
  theme?: Theme;
  primary?: boolean;
  secondary?: boolean;
  raised?: boolean;
  border?: boolean;
};

export const Card = styled.div<CardProps>`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CardTitle = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

export const CardBody = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardAction = styled.div`
  background-color: transparent;
  text-transform: uppercase;
  color: #6200ee;
  font-family: Roboto, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: #6200ee;
    background-color: rgba(0, 0, 0, 0.06);
  }
`;
