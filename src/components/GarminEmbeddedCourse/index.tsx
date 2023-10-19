import React, {type ReactNode} from 'react';

export interface Props {
  id: string;
}

export default function GarminEmbeddedCourse({
  id,
}: Props): JSX.Element {
  const url = `https://connect.garmin.com/modern/course/embed/${id}`;
  return (
    <div>
      <iframe src={url} width='465' height='548' />
    </div>
  );
}
