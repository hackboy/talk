declare module "react-timeago" {
  import React from "react";

  interface Props {
    date: string;
    live?: boolean;
    className: string;
    formatter?: Formatter;
  }

  function TimeAgo(): React.Component<Props>;
  export default TimeAgo;
}

interface LocaleDefinition {
  prefixAgo?: string | null;
  prefixFromNow?: string | null;
  suffixAgo?: string | null;
  suffixFromNow?: string | null;
  second?: string | null;
  seconds?: string | null;
  minute?: string | null;
  minutes?: string | null;
  hour?: string | null;
  hours?: string | null;
  day?: string | null;
  days?: string | null;
  week?: string | null;
  weeks?: string | null;
  month?: string | null;
  months?: string | null;
  year?: string | null;
  years?: string | null;
  wordSeparator?: string;
  numbers?: number[];
}

type Formatter = (
  value: number,
  unit: string,
  suffix: string,
  epochMiliseconds?: string
) => string;

declare module "react-timeago/lib/formatters/buildFormatter" {
  function buildFormatter(localeInput: LocaleDefinition): Formatter;
  export default buildFormatter;
}

declare module "react-timeago/lib/language-strings/*" {
  const localeStrings: LocaleDefinition;
  export default localeStrings;
}
