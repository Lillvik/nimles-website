import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Container } from "../src/components";

storiesOf("Container", module)
  .add("Default", () => (
    <Container style={{ background: "pink" }}>Default Container</Container>
  ))
  .add("Padding", () => (
    <Container padding style={{ background: "pink" }}>Default Container</Container>
  ))
  .add("Number padding", () => (
    <Container padding={5} style={{ background: "pink" }}>Default Container</Container>
  ))
  .add("String padding", () => (
    <Container padding={'10px 5px 20px 30px'} style={{ background: "pink" }}>Default Container</Container>
  ))
  .add("Fluid", () => (
    <Container fluid style={{ background: "pink" }}>
      Fluid Container
    </Container>
  ));
