import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import IphonePart from './components/Iphone/IphonePart';
import HuaWeiPart from './components/HuaWei/HuaWeiPart';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <IphonePart />
        <HuaWeiPart />
      </main>
    );
  }
}

export default App;
