import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';

export interface Props {
  id: string;
}

function GetGarminId(id: string) {
  switch (id)
  {
    case "barre":
      return "249757782";
    case "hokun":
      return "224619876";
    case "kokomo":
      return "211777074";
    case "laadchee":
      return "211106575";
    case "rockyt":
      return "215783112";
    case "semmering":
      return "211858322";
    case "shark-a":
      return "211895409";
    case "sunrose":
      return "211914796";
    default:
      throw new Error();
  }
}

export default function TrailRouteLink({
  id,
}: Props): JSX.Element {
  const gpxUrl = `https://connect.garmin.com/modern/proxy/course-service/course/gpx/${GetGarminId(id)}`;
  const garminUrl = `https://connect.garmin.com/modern/course/${GetGarminId(id)}`;
  return (
    <>
      <Link to={gpxUrl}>
        GPX
      </Link>
      <span> - </span>
      <Link to={garminUrl}>
        Garmin
      </Link>
    </>
  );
}
