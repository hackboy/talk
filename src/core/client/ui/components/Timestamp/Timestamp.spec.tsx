import React from "react";
import { create } from "react-test-renderer";

import Timestamp from "./Timestamp";

it("renders old date", () => {
  const props = {
    date: new Date("December 17, 1995 03:24:00").toISOString(),
  };
  const tree = create(<Timestamp {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders future date", () => {
  const props = {
    date: new Date("December 17, 2108 03:24:00").toISOString(),
  };
  const tree = create(<Timestamp {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
