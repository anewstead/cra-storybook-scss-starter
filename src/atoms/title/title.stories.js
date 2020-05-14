import React from 'react';
import { storiesOf } from '@storybook/react';

import Title from './title';

storiesOf('Atoms/Title', module).add('default', () => {
  return <Title>Example of Title</Title>;
});
