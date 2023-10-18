import React, {type ReactNode} from 'react';

export interface Props {
  id: string;
}

export default function MapyCzEmbeddedPath({
  id,
}: Props): JSX.Element {
  const url = `https://en.frame.mapy.cz/s/${id}`;
  return (
    <div>
      <iframe src={url} width="60%" height="333"></iframe>
      <div>
        <i>Click on "Show on map" to see detailed profile</i>
      </div>
    </div>
  );
}
