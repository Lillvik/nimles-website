import styled from "@emotion/styled";
import { Theme } from "../theme";

export type SectionProps = {
  theme?: Theme;
  padding?: boolean | number | string
};

const getPadding = (props: SectionProps) => {
  if (!props.padding) return '15px 0';

  if (typeof props.padding === "string") return props.padding;

  if (typeof props.padding === "number") return `${props.padding}px`;

  return '15px';
};

export const Section = styled.section<SectionProps>`
  margin: auto;
  padding: ${getPadding};
  max-width: 100%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;
