import { Component } from 'react';
import RouteList from './routes';
import './App.scss';
import LogadoProvider from './context/Logado';


export default class App extends Component {
  render() {
    return (
      <LogadoProvider>
        <RouteList />
      </LogadoProvider>
    );
  }
}
