import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import IphonePart from './components/Iphone/IphonePart';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <IphonePart />
      </main>
    );
  }
}

export default App;
