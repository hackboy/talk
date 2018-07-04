console.log("got exported");

declare module "react-timeago" {
  export = react_timeago;

  interface Props {
    date: string;
  }

  function react_timeago(): React.Component<Props>;
}
