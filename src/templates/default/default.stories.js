import React from 'react';
import { storiesOf } from '@storybook/react';

import styles from './default.module.scss';

const defaultStyle = {
  outline: '1px solid #eee',
  backgroundColor: 'rgba(220, 220, 220, 0.6)',
  minHeight: '200px',
};

storiesOf('Templates/Default', module).add('default', () => {
  return (
    <div className={styles.default} style={defaultStyle}>
      <div className={styles.hero} style={defaultStyle} />
      <div className={styles.col1} style={defaultStyle} />
      <div className={styles.col2} style={defaultStyle} />
    </div>
  );
});
