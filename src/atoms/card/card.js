import * as React from 'react';
import classnames from 'classnames';

import styles from './card.module.scss';

const Card = (props) => {
  return (
    <div className={classnames(styles.card, props.className)}>
      {props.children}
    </div>
  );
};

Card.defaultProps = {
  className: '',
  children: '',
};

export default Card;
