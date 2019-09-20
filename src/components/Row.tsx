import styled from "@emotion/styled";
import { Theme } from "../theme";

export type RowProps = {
  theme?: Theme;
  wrap?: boolean;
  flex?: boolean
  align?: string
  justify?: string
};

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  margin-left: -15px;
  margin-right: -15px;
  flex-wrap: ${props => props.wrap ? 'wrap' : 'unset'}
`;
