import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//----------------------------------
import { Provider  } from 'react-redux';
import rootReducer from './store';
// import { createStore } from 'redux'; // depricated (실행은 된다)
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리액트 개발자 도구

// const store = createStore(rootReducer);// 개발자 도구 필요없으면 Reducer만 가지고 있어도 된다.
const store = createStore(rootReducer, composeWithDevTools());

//----------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <Provider store={ store }>
      <App />  {/* <App /> 후손까지 store를 사용해도 된다. */}
    </Provider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
