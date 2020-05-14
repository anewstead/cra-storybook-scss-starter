import * as React from 'react';
import classnames from 'classnames';

import styles from './subtitle.module.scss';

const Subtitle = (props) => {
  return (
    <h2 className={classnames(styles.subtitle, props.className)}>
      {props.children}
    </h2>
  );
};

Subtitle.defaultProps = {
  className: '',
  children: '',
};

export default Subtitle;
