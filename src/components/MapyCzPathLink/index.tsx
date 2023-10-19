import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';

export interface Props {
  id: string;
}

export default function MapyCzPathLink({
  id,
}: Props): JSX.Element {
  const url = `https://en.mapy.cz/turisticka?dim=${id}&z=13`;
  return (
    <>
      <Link to={url}>Mapy.cz</Link>
    </>
  );
}
