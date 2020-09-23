import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import IphonePart from './components/Iphone/IphonePart';
import HuaWeiPart from './components/HuaWei/HuaWeiPart';

class App extends Component {
  state = {
    count: 0,
  };
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <main className="app">
        <Header count={this.state.count} />
        <IphonePart buy={this.handleIncrement} />
        <HuaWeiPart buy={this.handleIncrement} />
      </main>
    );
  }
}

export default App;
