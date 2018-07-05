import React from "react";
import { createRenderer } from "react-test-renderer/shallow";
import Comment from "./Comment";

it("renders username and body", () => {
  const props = {
    author: {
      username: "Marvin",
    },
    body: "Woof",
    createdAt: new Date().toISOString(),
  };
  const renderer = createRenderer();
  renderer.render(<Comment {...props} />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it("renders with gutterBottom", () => {
  const props = {
    author: {
      username: "Marvin",
    },
    body: "Woof",
    createdAt: new Date().toISOString(),
    gutterBottom: true,
  };
  const renderer = createRenderer();
  renderer.render(<Comment {...props} />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
