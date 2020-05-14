import * as React from 'react';
import classnames from 'classnames';

import styles from './feature.module.scss';

const Feature = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.image})` }}
      className={classnames(styles.feature, props.className)}
    >
      {props.children}
    </div>
  );
};

Feature.defaultProps = {
  className: undefined,
  children: undefined,
  image: '',
};

export default Feature;
