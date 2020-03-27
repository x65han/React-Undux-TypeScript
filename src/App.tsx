import React from 'react';
import logo from './logo.svg';
import './App.css';
import Store, { StoreProps } from './MyStore';

type Props = StoreProps;

class App extends React.Component<Props> {
  render() {
    const { store } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <>
            You clicked the button {store.get('clickCount')} times
            <button
              onClick={() => {
                store.set('clickCount')(store.get('clickCount') + 1);
              }}>
              {store.get('buttonText')}
            </button>
          </>
        </header>
      </div>
    );
  }
}

export default Store.withStore(App);
