import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './card';

storiesOf('Atoms/Card', module).add('default', () => {
  return <Card>Example of card</Card>;
});
