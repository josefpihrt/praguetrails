import React, { type ReactNode } from 'react';
import MediaQuery from 'react-responsive'
import clsx from 'clsx';

import Link from '@docusaurus/Link';

export enum Sizes {
  CentralStation,
  Chuchle,
}

export interface Props {
  caption: Sizes,
  desktopLink: string;
  mobileLink: string;
}

function GetValue (value: Sizes)
{
  switch (value) {
    case Sizes.CentralStation: {
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
