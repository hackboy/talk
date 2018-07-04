import React from "react";
import TimeAgo from "react-timeago";
import { withStyles } from "talk-ui/hocs";
import { PropTypesOf } from "talk-ui/types";

import * as styles from "./Timestamp.css";

interface InnerProps {
  date: string;
  classes: typeof styles;
}

class Timestamp extends React.Component<InnerProps> {
  public render() {
    const { date, classes } = this.props;
    return <TimeAgo date={date} className={classes.root} />;
  }
}

const enhanced = withStyles(styles)(Timestamp);
export type TimestampProps = PropTypesOf<typeof enhanced>;
export default enhanced;
