import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import Container from "./components/Container";
import './app.sass';
const App = () => {
  return (  
    <Provider store={store}>
      <div className="container">
        <Container />
      </div>   
    </Provider>  
  );
}

export default App;
