import cn from "classnames";
import React from "react";
import { StatelessComponent } from "react";

import { Timestamp, Typography } from "talk-ui/components";

import * as styles from "./Comment.css";

export interface CommentProps {
  className?: string;
  author: {
    username: string;
  } | null;
  body: string | null;
  createdAt: string;
  gutterBottom?: boolean;
}

const Comment: StatelessComponent<CommentProps> = props => {
  const rootClassName = cn(styles.root, props.className, {
    [styles.gutterBottom]: props.gutterBottom,
  });
  return (
    <div className={rootClassName}>
      <Typography className={styles.author} gutterBottom>
        {props.author && props.author.username}
      </Typography>
      <Timestamp date={props.createdAt} />
      <br />
      <Timestamp date={new Date().toISOString()} />
      <br />
      <Timestamp date={new Date("December 17, 1995 03:24:00").toISOString()} />
      <br />
      <Timestamp date={new Date("December 17, 2108 03:24:00").toISOString()} />
      <br />
      <Typography>{props.body}</Typography>
    </div>
  );
};

export default Comment;
