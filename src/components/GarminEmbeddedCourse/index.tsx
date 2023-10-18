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
      <iframe src={url} width='60%' height='500' />
      <div>
        <i>Click on trail name to see detailed profile</i>
      </div>
    </div>
  );
}
