declare module "react-timeago" {
  import React from "react";

  interface Props {
    date: string;
    className: string;
  }

  function TimeAgo(): React.Component<Props>;
  export default TimeAgo;
}
