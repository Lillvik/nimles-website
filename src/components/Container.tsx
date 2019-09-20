import styled from "@emotion/styled";
import { Theme } from "../theme";

export type ContainerProps = {
  theme?: Theme;
  fluid?: boolean;
  padding?: boolean | number | string;
};

const getPadding = (props: ContainerProps) => {
  if (!props.padding) return 0;

  if (typeof props.padding === "string") return props.padding;

  if (typeof props.padding === "number") return `${props.padding}px`;

  return '15px';
};

export const Container = styled.div<ContainerProps>`
  margin: auto;
  padding: ${getPadding};
  max-width: 100%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    & {
      max-width: ${prop => (prop.fluid ? "auto" : "720px")};
    }
  }

  @media (min-width: 992px) {
    & {
      max-width: ${prop => (prop.fluid ? "auto" : "960px")};
    }
  }

  @media (min-width: 1200px) {
    & {
      max-width: ${prop => (prop.fluid ? "auto" : "1140px")};
    }
  }
`;
