import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
// Component
import Posts from './components/Posts';
import PostForm from './components/PostForm';

// const store = createStore(() => [], {}, applyMiddleware())

import store from './store'

function App() {
  return (
    // the store move the state
    <Provider store={store}>
      <div className="App">
        <PostForm></PostForm>
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
