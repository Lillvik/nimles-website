import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { Modal, ModalBody, Container, Button } from "../src/components";

storiesOf("Modal", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    let open = true;

    const toggle = () => {
      console.log("toggle");
      action("toggle")();
      open = !open;
    };

    return (
      <Container>
        <Button onClick={toggle}>Open Modal</Button>
        <Modal open={boolean('Open', true)} onClose={toggle}>
          <ModalBody>Default Modal</ModalBody>
        </Modal>
      </Container>
    );
  });
