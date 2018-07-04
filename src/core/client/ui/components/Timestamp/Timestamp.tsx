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
    return <TimeAgo date={this.props.date} />;
  }
}

const enhanced = withStyles(styles)(Timestamp);
export type TimestampProps = PropTypesOf<typeof enhanced>;
export default enhanced;
