/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';

import clsx from 'clsx';

import Link from '@docusaurus/Link';
import styles from './styles.module.css';

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
        <i>(Click on "Show on map" to see detailed profile)</i>
      </div>
    </div>
  );
}
