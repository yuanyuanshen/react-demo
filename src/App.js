import React from 'react';
import './App.css';
import LocaleProvider from './localeSample/index'
import LocaleConsumer from './localeSample/sub'

function App () {
  return (
    <div className="App">
      <div>
        <LocaleProvider>
          <div>
            <br />
            <LocaleConsumer />
          </div>
        </LocaleProvider>
        <LocaleConsumer />
      </div>
    </div>
  );
}

export default App;
