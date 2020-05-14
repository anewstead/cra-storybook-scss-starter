import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './button';

storiesOf('Atoms/Button', module)
  .add('default', () => {
    return <Button onClick={action('clicked')}>Learn more</Button>;
  })
  .add('default - small', () => {
    return (
      <Button size="small" onClick={action('clicked')}>
        Learn more
      </Button>
    );
  })
  .add('default - medium', () => {
    return (
      <Button size="medium" onClick={action('clicked')}>
        Learn more
      </Button>
    );
  })
  .add('default - large', () => {
    return (
      <Button size="large" onClick={action('clicked')}>
        Learn more
      </Button>
    );
  })
  .add('rounded', () => {
    return (
      <Button theme="rounded" onClick={action('clicked')}>
        Learn more
      </Button>
    );
  })
  .add('disabled', () => {
    return (
      <Button disabled onClick={action('clicked')}>
        Learn more
      </Button>
    );
  });
