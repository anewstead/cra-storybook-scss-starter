import React from 'react';
import { storiesOf } from '@storybook/react';

import Subtitle from './subtitle';

storiesOf('Atoms/Subtitle', module).add('default', () => {
  return <Subtitle>Example of Subtitle</Subtitle>;
});
