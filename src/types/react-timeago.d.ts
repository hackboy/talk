declare module "react_timeago" {
  import React from "react";

  interface Props {
    date: string;
    className: string;
  }

  const TimeAgo: React.StatelessComponent<Props>;
  export default TimeAgo;
}
