import React from 'react';
import classnames from 'classnames';
import { storiesOf } from '@storybook/react';

import styles from './colors.module.scss';

const Vars = Object.keys(styles).map((value, index) => {
  return (
    <p key={index} className={classnames(styles.colors, styles[value])}>
      {value}
    </p>
  );
});

storiesOf('Colors', module).add('Colors', () => {
  return <div>{Vars}</div>;
});
