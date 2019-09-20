import styled from "@emotion/styled";
import { Theme } from "../theme";

export type ColumnProps = {
  theme?: Theme;
  width?: number | string;
  flex?: boolean;
};

const getWidth = (props: ColumnProps) => {
  if (!props.width) return 'auto';

  if (typeof props.width === "string") return props.width;

  if (typeof props.width === "number") return `${props.width}%`;

  return '15px';
};

export const Column = styled.div<ColumnProps>`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  flex-grow: ${props => (props.flex ? 1 : 0)};
  flex-shrink: 0;
  flex-basis: ${getWidth};
`;
