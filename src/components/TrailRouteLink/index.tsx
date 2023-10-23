import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';

export interface Props {
  id: string;
}

function GetGarminId(id: string) {
  switch (id)
  {
    case "barre":
      return "211837509";
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
    case "shuss":
      return "211914796";
    default:
      throw new Error();
  }
}

function GetMapyCzId(id: string) {
  switch (id)
  {
    case "barre":
      return "652fd038acaa705928cd5a80";
    case "hokun":
      return "651f065a36a6efcb000cbf3b";
    case "kokomo":
      return "6515f72525e33d94be29277f";
    case "laadchee":
      return "6515f72525e33d94be29277e";
    case "rockyt":
      return "65363b85a80e3a2fbc8f11cc";
    case "semmering":
      return "652d80293a4984d1a065acef";
    case "shark-a":
      return "6515f72525e33d94be29277b";
    case "shuss":
      return "6515f72525e33d94be29277a";
    default:
      throw new Error();
  }
}

export default function TrailRouteLink({
  id,
}: Props): JSX.Element {
  const gpxUrl = `/gpx/prague-trails-${id}.gpx`;
  const garminUrl = `https://connect.garmin.com/modern/course/${GetGarminId(id)}`;
  const mapyczUrl = `https://en.mapy.cz/turisticka?dim=${GetMapyCzId(id)}&z=13`;
  return (
    <>
      <Link to={garminUrl}>
        Garmin
      </Link>
      &nbsp;
      &nbsp;
      <Link to={mapyczUrl}>
        Mapy.cz
      </Link>
    </>
  );
}
