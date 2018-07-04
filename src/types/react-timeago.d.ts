declare module "react-timeago" {
  export = react_timeago;

  interface Props {
    date: string;
    className: string;
  }

  function react_timeago(): React.Component<Props>;
}
