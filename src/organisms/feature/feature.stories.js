import React from 'react';
import { storiesOf } from '@storybook/react';

import Block from '../../molecules/block/block';

import Feature from './feature';

storiesOf('Organisms/Feature', module).add('default', () => {
  return (
    <Feature image="https://i.pinimg.com/originals/7e/d6/1a/7ed61a337b0cccb1598fe5fd1b9724bf.jpg">
      <Block title="Block-title" button="Learn more">
        <p>Some text wrapped in a block</p>
      </Block>
    </Feature>
  );
});
