import React from 'react';

import '../assets/styles/global.scss';
import './app.scss';

import Block from '../molecules/block/block';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <p>This is a React App</p>
      </header>
      <Block title="Block-title" button="Learn more">
        <p>Some text wrapped in a block</p>
      </Block>
    </div>
  );
}

export default App;
