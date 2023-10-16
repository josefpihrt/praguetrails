import React, { type ReactNode } from 'react';
import MediaQuery from 'react-responsive'
import clsx from 'clsx';

import Link from '@docusaurus/Link';

export enum TrainStations {
  Dejvice,
  Ruzyne,
}

export interface Props {
  caption: TrainStations,
  desktopLink: string;
  mobileLink: string;
}

function GetValue (value: TrainStations)
{
  switch (value) {
    case TrainStations.Dejvice: {
      return "hlavni";
    }
    default: {
      throw new Error("bla");
    }
  }
}

export default function DesktopOrMobileLink({
  caption,
  desktopLink,
  mobileLink,
}: Props): JSX.Element {
  return (
    <>
      <MediaQuery minWidth={1224}>
        <Link to={desktopLink}>{GetValue(caption)}</Link>
      </MediaQuery>
      <MediaQuery maxWidth={1224}>
        <Link to={mobileLink}>{caption}</Link>
      </MediaQuery>
    </>
  );
}
