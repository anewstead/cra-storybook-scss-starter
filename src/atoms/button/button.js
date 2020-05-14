import * as React from 'react';
import classnames from 'classnames';
import styles from './button.module.scss';

const Button = (props) => {
  const { type, theme, size, onClick, className, disabled, children } = props;

  const classProps = classnames(
    styles.button,
    styles[theme],
    styles[size],
    {
      [styles.disabled]: disabled,
    },
    className
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classProps}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  theme: 'default',
  size: 'medium',
  onClick: () => {},
  className: '',
  disabled: false,
};

export default Button;
