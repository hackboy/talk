import React from "react";
import TimeAgo from "react-timeago";

import { withStyles } from "talk-ui/hocs";
import { PropTypesOf } from "talk-ui/types";
import { formatter } from "../../../framework/lib/i18n";

import * as styles from "./Timestamp.css";

interface InnerProps {
  date: string;
  live?: boolean;
  classes: typeof styles;
  formatter?: Formatter;
}

class Timestamp extends React.Component<InnerProps> {
  public render() {
    const { date, classes, live } = this.props;
    // console.log(formatter(5, "minute", "ago"));
    return (
      <TimeAgo
        date={date}
        className={classes.root}
        live={live}
        formatter={formatter}
      />
    );
  }
}

const enhanced = withStyles(styles)(Timestamp);
export type TimestampProps = PropTypesOf<typeof enhanced>;
export default enhanced;
