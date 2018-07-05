import React from "react";
import TimeAgo, { Formatter } from "react-timeago";

import { UIContext } from "talk-ui/components";
import { withStyles } from "talk-ui/hocs";
import { PropTypesOf } from "talk-ui/types";

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
    return (
      <UIContext.Consumer>
        {({ timeagoFormatter }) => (
          <TimeAgo
            date={date}
            className={classes.root}
            live={live}
            formatter={timeagoFormatter}
          />
        )}
      </UIContext.Consumer>
    );
  }
}

const enhanced = withStyles(styles)(Timestamp);
export type TimestampProps = PropTypesOf<typeof enhanced>;
export default enhanced;
