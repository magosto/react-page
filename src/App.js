import React from 'react';
import './style.css';
import Routes from './pages';

export default () => <Routes />;



export class App extends React.Component {
  render() {
    return (
    <Routes />
    );
  }
}
