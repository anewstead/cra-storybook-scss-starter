import React from 'react';
import { storiesOf } from '@storybook/react';

import Block from './block';

storiesOf('Molecules/Block', module).add('default', () => {
  return (
    <Block title="Block-title" button="Learn more">
      <p>Some text wrapped in a block</p>
    </Block>
  );
});
