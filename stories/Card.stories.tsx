import * as React from "react";
import { storiesOf } from "@storybook/react";
import {
  Card,
  CardTitle,
  CardBody,
  CardActions,
  CardAction
} from "../src/components";

storiesOf("Card", module).add("Default", () => (
  <Card>
    <CardTitle>Title</CardTitle>
    <CardBody>Body</CardBody>
    <CardActions>
      <CardAction>Action</CardAction>
    </CardActions>
  </Card>
));
