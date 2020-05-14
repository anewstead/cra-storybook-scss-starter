import * as React from 'react';

import Card from '../../atoms/card/card';
import Button from '../../atoms/button/button';
import Title from '../../atoms/title/title';

const Block = (props) => {
  return (
    <Card className={props.className}>
      <Title>{props.title}</Title>
      {props.children}
      {props.button !== '' && <Button>{props.button}</Button>}
    </Card>
  );
};

Block.defaultProps = {
  className: '',
  children: '',
  title: '',
  button: '',
};

export default Block;
