export const ReduxData = `

//App.js/////redux///////////////////////////////////////////////////////////////////////
npm i redux-thunk@3.1.0 react-redux@9.1.0" @reduxjs/toolkit@2.2.1
import React from "react";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApiCall } from '../utills/redux/action';
import { decrement } from '../utills/redux/slice';
const Home = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(ApiCall())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Home;



//Slice///////////////////////////////////////////////////////////////////////////////////

import { createSlice } from '@reduxjs/toolkit';

const userData = () => {
  let user = localStorage.getItem('user');
  try {
    return JSON.parse(user);
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    user: userData() || {},
    userList: [],
    recordList:[]
  },
  reducers: {
    increment: (state, action) => {
      state.value = action.payload;
      console.log('action', action);
    },
    decrement: state => {
      state.value -= 1;
    },
    login: (state, action) => {
      state.user = action.payload;
    },
    users: (state, action) => {
      state.userList = action.payload;
    },
    records: (state, action) => {
      state.recordList = action.payload;
    },
    add_records: (state, action) => {
      state.recordList =[...state.recordList, action.payload];
    },
    update_records: (state, action) => {
      state.recordList =state.recordList.map((item) => item.id === action.payload.id ? action.payload : item); ;
    },
    delete_records: (state, action) => {
      state.recordList =state.recordList.filter((item) => item.id !== action.payload.id );
    },
  },
});

export const { increment, decrement, login, users,records,add_records,update_records,
  delete_records } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;





//Action////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

ApiCall
import axios from 'axios';

const headers = new Headers({
  'Content-Type': 'application/json',
  'x-api-key': 'DEMO-API-KEY',
});
// return "$&{"result"}"
var requestOptions = {
  headers: headers,
};
export const POSTAPI = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, requestOptions)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
export const GETAPI = url => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, requestOptions)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const PostFormData = (url, dataObject) => {
  return new Promise((resolve, reject) => {
    // Create a new FormData instance
    const formData = new FormData();
    for (let key in dataObject) {
      if (dataObject[key] instanceof File) {
        // If the value is a file, append it as a file
        formData.append(key, dataObject[key]);
      } else {
        // Otherwise, just append it as a regular field
        formData.append(key, dataObject[key]);
      }
    }
    // Send POST request with FormData
    axios
      .post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

import { GETAPI } from '../common';
import { increment, decrement, login, users,records,add_records, update_records, delete_records } from './slice';
export const ApiCall = params => dispatch => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'x-api-key': 'DEMO-API-KEY',
  });
  // return "$&{"result"}"

  GETAPI(
    'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1',
  )
    .then(res => {
      console.log('result 123456', res, res[0].height);
      dispatch(increment(res[0].height));
    })
    .catch(err => {
      console.log('error', err);
    });
};
export const Login = (params, Navigate) => dispatch => {
  GETAPI(
    'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1',
  )
    .then(res => {
      console.log('result 123456', res[0], params);
      localStorage.setItem('user', JSON.stringify({ ...res[0], ...params }));
      dispatch(login({ ...res[0], ...params }));
      Navigate('/dashboard');
    })
    .catch(err => {
      console.log('error', err);
    });
};
export const GetUserList = data => dispatch => {
  GETAPI(
    'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1',
  )
    .then(res => {
      // dispatch(users(data));
    })
    .catch(err => {
      console.log('error', err);
    });
};
export const GetRecordList = data => dispatch => {
  GETAPI(
    'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1',
  )
    .then(res => {
      // dispatch(records(data));
    })
    .catch(err => {
      console.log('error', err);
    });
    dispatch(records(data));
};
export const AddRecord = data => dispatch => {
  GETAPI(
    'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1',
  )
    .then(res => {
      // dispatch(add_records(data));
    })
    .catch(err => {
      console.log('error', err);
    });
    dispatch(add_records(data));
};
export const UpdateRecord = data => dispatch => {
  GETAPI(
    'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1',
  )
    .then(res => {
      // dispatch(update_records(data));
    })
    .catch(err => {
      console.log('error', err);
    });
    dispatch(update_records(data));
};
export const DeleteRecord = data => dispatch => {
  GETAPI(
    'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1',
  )
    .then(res => {
      // dispatch(delete_records(data));
    })
    .catch(err => {
      console.log('error', err);
    });
    dispatch(delete_records(data));
};









//Reducer/////////////////////////////////////////////////////////////////////////////////////////////
// store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { combineReducers } from 'redux';
import { counterReducer } from './slice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(
  rootReducer, // Combine all your reducers here
  applyMiddleware(thunk),
);

export default store;


// reducers/index.js

 ;
import { Provider } from 'react-redux';
import store from './utills/redux/store';
  <Provider store={store}>
      <App />
    </Provider>

`;

export const Routing = `
// Router
npm install sass formik yup redux-thunk@3.1.0 react-redux@9.1.0 @reduxjs/toolkit@2.2.1 react-bootstrap  bootstrap axios web-vitals react-router-dom

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import { DashboardLayout, LoginLayout } from './components/layout';

const userData = () => {
  let user = localStorage.getItem('user');
  try {
    return JSON.parse(user);
  } catch (error) {
    console.log(error);
    return {};
  }
};
// Mock Authentication Function
const isAuthenticated = () => {
  const user = { email: 'email' }; // userData();
  return user && user.email;
};

// Private Route Component
const PrivateRoute = ({ children, user }) => {
  console.log({ user });
  return isAuthenticated() ? (
    <DashboardLayout>{children}</DashboardLayout>
  ) : (
    <Navigate to='/login' />
  );
};

// Redirect if Already Logged In
const PublicRoute = ({ children, user }) => {
  console.log({ user });
  return isAuthenticated() ? (
    <Navigate to='/dashboard' />
  ) : (
    <LoginLayout>{children}</LoginLayout>
  );
};
const App = () => {
  const user = { email: 'email' }; //useSelector(state => state.counter);

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path='/' element={<Home />} />

        {/* Redirect to Dashboard if Logged In */}
        <Route
          path='/login'
          element={
            <PublicRoute user={user}>
              <LoginPage />
            </PublicRoute>
          }
        />

        {/* Private Route */}
        <Route
          path='/dashboard'
          element={
            <PrivateRoute user={user}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

// =============================================================================>Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { POSTAPI } from '../utills/common';
// import { useDispatch } from 'react-redux';
// import { ApiCall, Login } from '../utills/redux/action';
// import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const Navigate = useNavigate();
  // const Navigate = () => Navigation('/dashboard');
  // const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const OnSubmit = e => {
    Navigate('/dashboard');
    // dispatch(Login(formData, Navigate));
  };

  return (
    <>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <style jsx>
        {
          body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            font-family: 'Jost', sans-serif;
            background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
          }
          .main {
            width: 350px;
            height: 500px;
            background: red;
            overflow: hidden;
            background: url('https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38')
              no-repeat center/ cover;
            border-radius: 10px;
            box-shadow: 5px 20px 50px #000;
          }
          #chk {
            display: none;
          }
          .signup {
            position: relative;
            width: 100%;
            height: 100%;
          }
          label {
            color: #fff;
            font-size: 2.3em;
            justify-content: center;
            display: flex;
            margin: 50px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.5s ease-in-out;
          }
          input {
            width: 60%;
            height: 10px;
            background: #e0dede;
            justify-content: center;
            display: flex;
            margin: 20px auto;
            padding: 12px;
            border: none;
            outline: none;
            border-radius: 5px;
          }
          button {
            width: 60%;
            height: 40px;
            margin: 10px auto;
            justify-content: center;
            display: block;
            color: #fff;
            background: #573b8a;
            font-size: 1em;
            font-weight: bold;
            margin-top: 30px;
            outline: none;
            border: none;
            border-radius: 5px;
            transition: 0.2s ease-in;
            cursor: pointer;
          }
          button:hover {
            background: #6d44b8;
          }
          .login {
            height: 460px;
            background: #eee;
            border-radius: 60% / 10%;
            transform: translateY(-164px);
            transition: 0.8s ease-in-out;
          }
          .login label {
            color: #573b8a;
            transform: scale(0.6);
          }

          #chk:checked ~ .login {
            transform: translateY(-500px);
          }
          #chk:checked ~ .login label {
            transform: scale(1);
          }
          #chk:checked ~ .signup label {
            transform: scale(0.6);
          }
        }{' '}
      </style>
      <>
        <title>Slide Navbar</title>
        <link rel='stylesheet' type='text/css' href='slide navbar style.css' />
        <link
          href='https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap'
          rel='stylesheet'
        />
        <div className='main'>
          <input type='checkbox' id='chk' aria-hidden='true' />
          <div className='signup'>
            <div>
              <label htmlFor='chk' aria-hidden='true'>
                Sign up
              </label>
              <input
                type='text'
                name='txt'
                placeholder='User name'
                required=''
              />
              <input
                type='email'
                name='email'
                placeholder='Email'
                required=''
              />
              <input
                type='number'
                name='broj'
                placeholder='BrojTelefona'
                required=''
              />
              <input
                type='password'
                name='pswd'
                placeholder='Password'
                required=''
              />
              <button>Sign up</button>
            </div>
          </div>
          <div className='login'>
            <div>
              <label htmlFor='chk' aria-hidden='true'>
                Login
              </label>
              <input
                type='email'
                name='email'
                placeholder='Email'
                required=''
                onChange={handleChange}
              />
              <input
                type='password'
                name='password'
                placeholder='Password'
                required=''
                onChange={handleChange}
              />
              <button onClick={OnSubmit}>Login</button>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default LoginPage;


// =============================================================================>Layout.js

const Sidebar = () => {
  return (
    <>
      <style jsx>{
        :root {
          --background: #9c88ff;
          --navbar-width: 256px;
          --navbar-width-min: 80px;
          --navbar-dark-primary: #18283b;
          --navbar-dark-secondary: #2c3e50;
          --navbar-light-primary: #f5f6fa;
          --navbar-light-secondary: #8392a5;
        }

        html,
        body {
          margin: 0;
          background: var(--background);
        }

        #nav-toggle:checked ~ #nav-header {
          width: calc(var(--navbar-width-min) - 16px);
        }

        #nav-toggle:checked ~ #nav-content,
        #nav-toggle:checked ~ #nav-footer {
          width: var(--navbar-width-min);
        }

        #nav-toggle:checked ~ #nav-header #nav-title {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.1s;
        }

        #nav-toggle:checked ~ #nav-header label[for='nav-toggle'] {
          left: calc(50% - 8px);
          transform: translate(-50%);
        }

        #nav-toggle:checked ~ #nav-header #nav-toggle-burger {
          background: var(--navbar-light-primary);
        }
        #nav-toggle:checked ~ #nav-header #nav-toggle-burger:before,
        #nav-toggle:checked ~ #nav-header #nav-toggle-burger::after {
          width: 16px;
          background: var(--navbar-light-secondary);
          transform: translate(0, 0) rotate(0deg);
        }

        #nav-toggle:checked ~ #nav-content .nav-button span {
          opacity: 0;
          transition: opacity 0.1s;
        }

        #nav-toggle:checked ~ #nav-content .nav-button .fas {
          min-width: calc(100% - 16px);
        }

        #nav-toggle:checked ~ #nav-footer #nav-footer-avatar {
          margin-left: 0;
          left: 50%;
          transform: translate(-50%);
        }

        #nav-toggle:checked ~ #nav-footer #nav-footer-titlebox,
        #nav-toggle:checked ~ #nav-footer label[for='nav-footer-toggle'] {
          opacity: 0;
          transition: opacity 0.1s;
          pointer-events: none;
        }

        #nav-bar {
          height: 100%;
          background: var(--navbar-dark-primary);
          display: flex;
          flex-direction: column;
          color: var(--navbar-light-primary);
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          overflow: hidden;
          user-select: none;
        }
        #nav-bar hr {
          margin: 0;
          position: relative;
          left: 16px;
          width: calc(100% - 32px);
          border: none;
          border-top: solid 1px var(--navbar-dark-secondary);
        }
        #nav-bar a {
          color: inherit;
          text-decoration: inherit;
        }
        #nav-bar input[type='checkbox'] {
          display: none;
        }

        #nav-header {
          position: relative;
          width: var(--navbar-width);
          left: 16px;
          width: calc(var(--navbar-width) - 16px);
          min-height: 80px;
          background: var(--navbar-dark-primary);
          border-radius: 16px;
          z-index: 2;
          display: flex;
          align-items: center;
          transition: width 0.2s;
        }
        #nav-header hr {
          position: absolute;
          bottom: 0;
        }

        #nav-title {
          font-size: 1.5rem;
          transition: opacity 1s;
        }

        label[for='nav-toggle'] {
          position: absolute;
          right: 0;
          width: 3rem;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        #nav-toggle-burger {
          position: relative;
          width: 16px;
          height: 2px;
          background: var(--navbar-dark-primary);
          border-radius: 99px;
          transition: background 0.2s;
        }
        #nav-toggle-burger:before,
        #nav-toggle-burger:after {
          content: '';
          position: absolute;
          top: -6px;
          width: 10px;
          height: 2px;
          background: var(--navbar-light-primary);
          border-radius: 99px;
          transform: translate(2px, 8px) rotate(30deg);
          transition: 0.2s;
        }
        #nav-toggle-burger:after {
          top: 6px;
          transform: translate(2px, -8px) rotate(-30deg);
        }

        #nav-content {
          margin: -16px 0;
          padding: 16px 0;
          position: relative;
          flex: 1;
          width: var(--navbar-width);
          background: var(--navbar-dark-primary);
          box-shadow: 0 0 0 16px var(--navbar-dark-primary);
          direction: rtl;
          overflow-x: hidden;
          transition: width 0.2s;
        }
        #nav-content::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        #nav-content::-webkit-scrollbar-thumb {
          border-radius: 99px;
          background-color: #d62929;
        }
        #nav-content::-webkit-scrollbar-button {
          height: 16px;
        }

        #nav-content-highlight {
          position: absolute;
          left: 16px;
          top: -70px;
          width: calc(100% - 16px);
          height: 54px;
          background: var(--background);
          background-attachment: fixed;
          border-radius: 16px 0 0 16px;
          transition: top 0.2s;
        }
        #nav-content-highlight:before,
        #nav-content-highlight:after {
          content: '';
          position: absolute;
          right: 0;
          bottom: 100%;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          box-shadow: 16px 16px var(--background);
        }
        #nav-content-highlight:after {
          top: 100%;
          box-shadow: 16px -16px var(--background);
        }

        .nav-button {
          position: relative;
          margin-left: 16px;
          height: 54px;
          display: flex;
          align-items: center;
          color: var(--navbar-light-secondary);
          direction: ltr;
          cursor: pointer;
          z-index: 1;
          transition: color 0.2s;
        }
        .nav-button span {
          transition: opacity 1s;
        }
        .nav-button .fas {
          transition: min-width 0.2s;
        }
        .nav-button:nth-of-type(1):hover {
          color: var(--navbar-dark-primary);
        }
        .nav-button:nth-of-type(1):hover ~ #nav-content-highlight {
          top: 16px;
        }
        .nav-button:nth-of-type(2):hover {
          color: var(--navbar-dark-primary);
        }
        .nav-button:nth-of-type(2):hover ~ #nav-content-highlight {
          top: 70px;
        }
        .nav-button:nth-of-type(3):hover {
          color: var(--navbar-dark-primary);
        }
        .nav-button:nth-of-type(3):hover ~ #nav-content-highlight {
          top: 124px;
        }
        .nav-button:nth-of-type(4):hover {
          color: var(--navbar-dark-primary);
        }
        .nav-button:nth-of-type(4):hover ~ #nav-content-highlight {
          top: 178px;
        }
        .nav-button:nth-of-type(5):hover {
          color: var(--navbar-dark-primary);
        }
        .nav-button:nth-of-type(5):hover ~ #nav-content-highlight {
          top: 232px;
        }
        .nav-button:nth-of-type(6):hover {
          color: var(--navbar-dark-primary);
        }
        .nav-button:nth-of-type(6):hover ~ #nav-content-highlight {
          top: 286px;
        }
        .nav-button:nth-of-type(7):hover {
          color: var(--navbar-dark-primary);
        }
        .nav-button:nth-of-type(7):hover ~ #nav-content-highlight {
          top: 340px;
        }
        .nav-button:nth-of-type(8):hover {
          color: var(--navbar-dark-primary);
        }
        .nav-button:nth-of-type(8):hover ~ #nav-content-highlight {
          top: 394px;
        }

        #nav-bar .fas {
          min-width: 3rem;
          text-align: center;
        }

        #nav-footer {
          position: relative;
          width: var(--navbar-width);
          height: 54px;
          background: var(--navbar-dark-secondary);
          display: flex;
          flex-direction: column;
          z-index: 2;
          transition: width 0.2s, height 0.2s;
        }

        #nav-footer-heading {
          position: relative;
          width: 100%;
          height: 54px;
          display: flex;
          align-items: center;
        }

        #nav-footer-avatar {
          position: relative;
          margin: 11px 0 11px 16px;
          left: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          overflow: hidden;
          transform: translate(0);
          transition: 0.2s;
        }
        #nav-footer-avatar img {
          height: 100%;
        }

        #nav-footer-titlebox {
          position: relative;
          margin-left: 16px;
          width: 10px;
          display: flex;
          flex-direction: column;
          transition: opacity 1s;
        }

        #nav-footer-subtitle {
          color: var(--navbar-light-secondary);
          font-size: 0.6rem;
        }

        #nav-toggle:not(:checked) ~ #nav-footer-toggle:checked + #nav-footer {
          height: 30%;
          min-height: 54px;
        }
        #nav-toggle:not(:checked)
          ~ #nav-footer-toggle:checked
          + #nav-footer
          label[for='nav-footer-toggle'] {
          transform: rotate(180deg);
        }

        label[for='nav-footer-toggle'] {
          position: absolute;
          right: 0;
          width: 3rem;
          height: 100%;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: transform 0.2s, opacity 0.2s;
        }

        #nav-footer-content {
          margin: 0 16px 16px 16px;
          border-top: solid 1px var(--navbar-light-secondary);
          padding: 16px 0;
          color: var(--navbar-light-secondary);
          font-size: 0.8rem;
          overflow: auto;
        }
        #nav-footer-content::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        #nav-footer-content::-webkit-scrollbar-thumb {
          border-radius: 99px;
          background-color: #d62929;
        }
      }</style>

      <div id='nav-bar'>
        <input id='nav-toggle' type='checkbox' />
        <div id='nav-header'>
          <a id='nav-title' href='https://codepen.io' target='_blank'>
            C<i className='fab fa-codepen'></i>DEPEN
          </a>
          <label htmlFor='nav-toggle'>
            <span id='nav-toggle-burger'></span>
          </label>
          <hr />
        </div>
        <div id='nav-content'>
          <div className='nav-button'>
            <i className='fas fa fa-home'></i>
            <span>Your Work</span>
          </div>

          <div id='nav-content-highlight'></div>
        </div>
        <input id='nav-footer-toggle' type='checkbox' />
        <div id='nav-footer'>
          <div id='nav-footer-heading'>
            <div id='nav-footer-avatar'>
              <img src='https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547' />
            </div>
            <div id='nav-footer-titlebox'>
              <a
                id='nav-footer-title'
                href='https://codepen.io/uahnbu/pens/public'
                target='_blank'
              >
                uahnbu
              </a>
              <span id='nav-footer-subtitle'>Admin</span>
            </div>
            <label htmlFor='nav-footer-toggle'>
              <i className='fas fa fa-arrow-up'></i>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export const DashboardLayout = ({ children }) => {
  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Sidebar />
      {/* Main Content Area */}
      <div style={{ flex: 1 }}>
        {/* Navbar */}
        <nav
          className='navbar navbar-light d-flex justify-content-end'
          style={{ background: '#18283b' }}
        >
          <a className='navbar-brand' href='#'>
            <img
              src='https://tse1.mm.bing.net/th?id=OIP.L8bs33mJBAUBA01wBfJnjQHaHa&pid=Api&P=0&h=180'
              width='30'
              height='30'
              alt=''
            />
          </a>
        </nav>

        {/* Content */}
        <main style={{ padding: '1rem' }}>{children}</main>
      </div>
    </div>
  );
};

export const LoginLayout = ({ children }) => {
  return <>{children}</>;
};

`;

export const ApiCall = `
ApiCall
import axios from 'axios';

const headers = new Headers({
  'Content-Type': 'application/json',
  'x-api-key': 'DEMO-API-KEY',
});
// return "$&{"result"}"
var requestOptions = {
  headers: headers,
};
export const POSTAPI = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, requestOptions)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
export const GETAPI = url => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, requestOptions)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const PostFormData = (url, dataObject) => {
  return new Promise((resolve, reject) => {
    // Create a new FormData instance
    const formData = new FormData();
    for (let key in dataObject) {
      if (dataObject[key] instanceof File) {
        // If the value is a file, append it as a file
        formData.append(key, dataObject[key]);
      } else {
        // Otherwise, just append it as a regular field
        formData.append(key, dataObject[key]);
      }
    }
    // Send POST request with FormData
    axios
      .post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

`;

export const CRUD = `

import React, { useEffect, useState, useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import {
  AddRecord,
  DeleteRecord,
  GetRecordList,
  GetrecordList,
  UpdateRecord,
} from '../utills/redux/action';
import { CommonModal } from '../components/common/Modal';
import Record from '../components/posts/Post';

const FormElement = ({ updateRecord, setUpdateRecord, onSubmit,handleClose }) => {

  // ------------------------------------------forimic

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      image: null,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      image: Yup.mixed()
        .nullable()
        .required('Image is required')
        .test(
          'fileFormat',
          'Only valid files are allowed',
          value => !value || value.includes('blob:') || value.includes('.'),
        ),
    }),
    onSubmit: values => {
      if (updateRecord && updateRecord.id) {
          onSubmit({...updateRecord,...values});
          setUpdateRecord();
      }else{
        onSubmit(values);
      }

    },
  });

  useEffect(() => {
    if (updateRecord && updateRecord.id) {
      // console.log('updateRecord', updateRecord);
      // setInitialValues(updateRecord);
      const existedData = [
        { field: 'name', value: updateRecord?.name },
        { field: 'email', value: updateRecord?.email },
        { field: 'password', value: updateRecord?.password },
        { field: 'image', value: updateRecord?.image },
      ];

      existedData.forEach(i => {
        formik.setFieldValue(i?.field, i?.value);
      });
    }
  }, [updateRecord]);

  const selectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      try {
        // validateFile(file, 'images');
      } catch (e) {
        // toast.error(e);
        return false;
      }
      formik.handleChange({
        target: { name: e.target.name, value: URL.createObjectURL(file) },
      });
    }
  };


  return (
    <div
      style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}

    >
      <form onSubmit={formik.handleSubmit} className='d-flex flex-column gap-3'>
        {/* Name Field */}
        {[
          { title: 'Name', field: 'name', type: 'text' },
          { title: 'Email', field: 'email', type: 'email' },
          { title: 'Password', field: 'password', type: 'password' },
          { title: 'Image', field: 'image', type: 'file' },
        ].map(({ title, field, type }, index) => {
          return (
            <div className='form-group' key={index}>
              <label htmlFor='exampleInputEmail1'>{title}</label>
              {field === 'image' ? (
                <>
                  <div>
                    <label htmlFor='selectFile' className='cursor-pointer'>
                      <img
                        src={
                          formik.values[field]
                            ? formik.values[field]
                            : 'data:image/png;base64,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'
                        }
                        className='upload-image'
                        style={{ width: '150px' }}
                      />
                    </label>
                    <input
                      type='file'
                      id='selectFile'
                      className='d-none'
                      name={field}
                      onChange={e => selectFile(e)}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched[field] && formik.errors[field] ? (
                      <div style={{ color: 'red' }}>{formik.errors[field]}</div>
                    ) : null}
                  </div>
                </>
              ) : (
                <>
                  <input
                    type={type}
                    className='form-control'
                    placeholder={Enter ${title}}
                    name={field}
                    value={formik.values[field]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched[field] && formik.errors[field] ? (
                    <div style={{ color: 'red' }}>{formik.errors[field]}</div>
                  ) : null}
                </>
              )}
            </div>
          );
        })}

        {/* Email Field */}

        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
        <button className='btn btn-dark' onClick={handleClose}>Close</button>
      </form>
    </div>
  );
};
const RemoveRecordElement = ({ deleteRecord, setDeleteRecord, onSubmit,handleClose }) => {
  const handleSubmit = () => {
    onSubmit({ ...deleteRecord, isDelete: true });
    setDeleteRecord({});
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <div className='d-flex flex-column gap-3'>
        <h3>Are you sure you want to delete this record?</h3>
        <button
          className='btn btn-primary'
          type='submit'
          onClick={handleSubmit}
        >
          Yes
        </button>
        <button className='btn btn-dark' onClick={handleClose}>No</button>
      </div>
    </div>
  );
};

const Table = () => {
  const dispatch = useDispatch();
  const uniqId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  const [show, setShow] = useState(false);
  const [updateRecord, setUpdateRecord] = useState({});
  const [deleteRecord, setDeleteRecord] = useState({});
  const handleClose = () => {
    setShow(false);
    setUpdateRecord({});
    setDeleteRecord({});
  };
  const handleShow = () => setShow(true);
  const recordlist = useSelector(state => state.counter.recordList);
  const recordData = [
    {
      id: 1,
      name: 'John',
      email: 'Doe',
      password: 'Doe',
      image: '',
    },
    {
      id: 2,
      name: 'John2',
      email: 'Doe2',
      password: 'Doe',
      image: '',
    },
  ];

  const onSubmit = record => {
    if (record.isDelete) {
      dispatch(DeleteRecord(record));
    } else {
      if (record.id) {
        dispatch(UpdateRecord(record));
      } else {
        dispatch(AddRecord({ ...record, id: uniqId }));
      }
    }

    handleClose();
  };
  const onUpdate = record => {
    setUpdateRecord({ ...record, imageAvailable: true });
    handleShow();
  };
  const onDelete = record => {
    setDeleteRecord({ ...record, imageAvailable: true });
    handleShow();
  };
  const GetData = () => {
    dispatch(GetRecordList(recordData));
  };

  useEffect(() => {
    GetData();
  }, []);

  const test = () => {
    console.log(recordlist);
  };
  return (
    <>
      <style jsx>{

        .card{
    height: 100vh;
    border-radius: 0;
  }
  .card-body {
    overflow-x: auto;
  }
        .card-body {
          overflow-x: auto;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
          width: 100%;
          border: 1px solid #ddd;
        }

        th,
        td {
          text-align: left;
          padding: 16px;
        }

        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
      }</style>
      <div className='dashboardPage'>
        <div className='card'>
          <div className='card-body'>
            <div className='pb-2 d-flex justify-content-between align-items-center'>
              <h5 className='card-title' onClick={test}>
                Manage Record
              </h5>
              <button className='btn btn-primary' onClick={handleShow}>
                Add Record
              </button>
            </div>

            <div>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
                {recordlist &&
                  recordlist.length > 0 &&
                  recordlist.map((user, index) => (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <div>
                          <button
                            type='button'
                            className='btn btn-primary'
                            onClick={() => onUpdate(user)}
                          >
                            Edit
                          </button>
                          &nbsp;
                          <button
                            type='button'
                            className='btn btn-danger'
                            onClick={() => onDelete(user)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>{' '}
                    </tr>
                  ))}
              </table>
            </div>
          </div>
        </div>
      </div>
      <CommonModal
        show={show}
        handleClose={handleClose}
        children={
          deleteRecord.id ? (
            <RemoveRecordElement
              deleteRecord={deleteRecord}
              setDeleteRecord={setDeleteRecord}
              onSubmit={onSubmit}
              handleClose={handleClose}
            />
          ) : (
            <FormElement
              updateRecord={updateRecord}
              setUpdateRecord={setUpdateRecord}
              onSubmit={onSubmit}
              handleClose={handleClose}
            />
          )
        }
        title={
          deleteRecord && deleteRecord.id
            ? 'Delete Record'
            : updateRecord && updateRecord.id
            ? 'Update Record'
            : 'Add Record'
        }
      />
    </>
  );
};

export default Table;


import { Modal } from "react-bootstrap";

export function CommonModal({ show, handleClose, children, title }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}


`;

export const verticalTree = `


.treeContainer {
  overflow: auto;
}
.tree-container-a {
  width: max-content;
  border-radius: 8px;
  font-size: 14px !important;
}
.tree-container-a .childrenNodeBox {
  padding-left: 21px !important;
}
.tree-container-b {
  font-size: 14px !important;
}
.tree-container-b .fa {
  font-size: 14px !important;
}
.tree-container-a .tree-item {
  display: flex;
  align-items: center;
  font-size: 16px;
}

.tree-container-a .tree-item span {
  margin-left: 10px;
  color: #333;
  font-weight: bold;
}

.tree-container-a .tree-item:hover {
  background-color: #e6f7ff;
  border-radius: 5px;
}

.tree-container-a .ms-4 {
  /* border-left: 1px solid #ddd; */
  padding-left: 10px;
}
.nodeBox .text-success {
  color: #22085f !important;
  background-color: #ffffff;
  border-radius: 50%;
  border: 0.1px solid #ffffff;
}
.tree-container-a .nodeBox {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}


import React, { use, useEffect, useState } from 'react';
// Recursive TreeNode component

function addNodes(tree, parentId, nestedData) {
  for (let node of tree) {
    if (node.id === parentId) {
      // Found the parent node, now add nested data
      node.children = []; // Ensure children array exists
      node.children.push(...nestedData); // Add the nestedData to children
      return true; // Return true to indicate the operation succeeded
    }
    // If current node has children, perform recursion
    if (node.children && node.children.length > 0) {
      const isAdded = addNodes(node.children, parentId, nestedData);
      if (isAdded) return true; // If data is added in a deeper level, stop further recursion
    }
  }
  return false; // Return false if the parentId was not found in the tree
}

const TreeNode = ({ node, getContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (node.children) {
      if (isOpen) {
        setIsOpen(false);
      } else {
        // getContent(node.id);

        setIsOpen(true);
      }
    }
  };

  return (
    <div key={node.id}>
      <div
        className='nodeBox boxBorder'
        onClick={() => node.isExpanded && handleClick()}
        style={{ cursor: 'pointer' }}
      >
        {node.isExpanded && isOpen ? (
          <span className='me-2 minusIcon'>
            {' '}
            <i className='fa text-success fa-check-circle mx-1'></i>
          </span>
        ) : node.children && node.isExpanded ? (
          <span className='me-2'>
            <i className='fa text-success fa-circle mx-1'></i>
          </span>
        ) : (
          ''
        )}

        <span>
          <span className='me-2'>
            <i className='fa fa-user mx-1'></i>
          </span>{' '}
          {node.name}
        </span>
      </div>
      {isOpen && node.children && (
        <div className='ms-4 mt-2 childrenNodeBox'>
          {node.children.map(childNode => (
            <TreeNode
              key={childNode.id}
              node={childNode}
              getContent={getContent}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Main Tree component
const Tree = ({ data, getContent }) => {
  return (
    <div className='tree-container-a pl-3'>
      {data.map(node => (
        <TreeNode key={node?.id} node={node} getContent={getContent} />
      ))}
    </div>
  );
};

export const App = () => {
  const [loader, setLoader] = useState(false);
  const [treeData, setTreeData] = useState([]);
  const getContent = async parentId => {};

  useEffect(() => {
    getContent();
  }, []);
  return (
    <>
      <button onClick={() => console.log('treeData', treeData)}>tet</button>
      <Tree data={Data} getContent={getContent} />
    </>
  );
};

var Data = [
  {
    parent_id: 'eQ==',
    id: 'eA==',
    name: 'mcCoin',
    children: [
      {
        parent_id: 'eA==',
        id: 'ew==',
        name: 'abc12',
        children: [],
        isExpanded: false,
      },
      {
        parent_id: 'eA==',
        id: 'fQ==',
        name: 'raininfo1211',
        children: [],
        isExpanded: false,
      },
      {
        parent_id: 'eA==',
        id: 'fA==',
        name: 'raininfo22',
        children: [
          {
            parent_id: 'fA==',
            id: 'ev4=',
            name: 'SeptUser1309',
            children: [],
            isExpanded: false,
          },
          {
            parent_id: 'fA==',
            id: 'ev8=',
            name: 'TestXyz123',
            children: [
              {
                parent_id: 'ev8=',
                id: 'eg==',
                name: 'office12',
                children: [],
                isExpanded: false,
              },
            ],
            isExpanded: true,
          },
        ],
        isExpanded: true,
      },
      {
        parent_id: 'eA==',
        id: 'eP8=',
        name: 'mcCoin122',
        children: [],
        isExpanded: false,
      },
      {
        parent_id: 'eA==',
        id: 'e/w=',
        name: 'RainUser123',
        children: [],
        isExpanded: false,
      },
      {
        parent_id: 'eA==',
        id: 'e/0=',
        name: 'TestUser123',
        children: [],
        isExpanded: false,
      },
      {
        parent_id: 'eA==',
        id: 'e/o=',
        name: 'dummy123',
        children: [],
        isExpanded: false,
      },
      {
        parent_id: 'eA==',
        id: 'ev4=',
        name: 'SeptUser1309',
        children: [],
        isExpanded: false,
      },
      {
        parent_id: 'eA==',
        id: 'ff4=',
        name: 'Test456',
        children: [],
        isExpanded: false,
      },
      {
        parent_id: 'eA==',
        id: 'fP4=',
        name: 'Abc123',
        children: [
          {
            parent_id: 'fP4=',
            id: 'fP8=',
            name: 'newRefUser123',
            children: [
              {
                parent_id: 'fP8=',
                id: 'fPw=',
                name: 'SeptUser262',
                children: [],
                isExpanded: false,
              },
            ],
            isExpanded: true,
          },
        ],
        isExpanded: true,
      },
    ],
    isExpanded: true,
  },
];

`;

export const horizontalTree = `

.tree-container-b {
  padding: 0 10px;
  width: max-content;
  position: relative;
  bottom: 22px;
}
.treeContainer {
  overflow: auto;
}
.tree-container-b ul {
  padding-top: 26px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  list-style: none !important;
  padding-left: 0px !important;
}

.tree-container-b li {
  list-style-type: none;
  text-align: center;
  position: relative;
  padding: 29px 5px 0px 5px;
}

/* Draw the connectors */
.tree-container-b li::before,
.tree-container-b li::after {
  content: '';
  position: absolute;
  top: 0;
  right: 50%;
  border-top: 1px solid #ccc;
  width: 50%;
  height: 20px;
}
.tree-container-b ul ul li::after,
.tree-container-b ul ul li::before {
  content: '';
  position: absolute;
  top: 0;
  right: 50%;
  border-top: 1px solid #ccc;
  width: 50%;
  height: 29px;
}

.tree-container-b li::after {
  right: auto;
  left: 50%;
  border-left: 1px solid #ccc;
}

/* Remove connectors for only-child */
.tree-container-b li:only-child::after,
.tree-container-b li:only-child::before {
  display: none;
}

/* Remove space from the top of single children */
.tree-container-b li:only-child {
  padding-top: 0;
}

/* Remove left connector from first child and right connector from last child */
.tree-container-b li:first-child::before,
.tree-container-b li:last-child::after {
  border: none;
}

/* Add back the vertical connector to the last nodes */
.tree-container-b li:last-child::before {
  border-right: 1px solid #ccc;
  border-radius: 0 5px 0 0;
}

.tree-container-b li:first-child::after {
  border-radius: 5px 0 0 0;
}

/* Add downward connectors from parents */
.tree-container-b ul ul::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  border-left: 1px solid #ccc;
  width: 0;
  height: 26px;
}

.tree-container-b li span {
  border: 1px solid #ccc;
  padding: 5px 10px;
  text-decoration: none;
  color: rgba(231, 248, 253, 1);
  font-size: 14px !important;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
}

/* Hover effects */
.tree-container-b li span:hover,
.tree-container-b li span:hover + ul li span {
  background: #c8e4f8;
  color: #000;
  border: 1px solid #94a0b4;
}

/* Connector styles on hover */
.tree-container-b li span:hover + ul li::after,
.tree-container-b li span:hover + ul li::before,
.tree-container-b li span:hover + ul::before,
.tree-container-b li span:hover + ul ul::before {
  border-color: #94a0b4;
}
.tree-container-b li span {
  cursor: pointer;
}

.tree-container-b-btn {
  margin: 3px !important;
  border-radius: 50% !important;
}
.tree-container-b-plush-btn {
  border-radius: 100% !important;
  width: 20px !important;
  height: 20px !important;
  color: whitesmoke !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  position: absolute !important;
  top: 5px !important;
  right: 7px !important;
  cursor: pointer !important;
  font-size: large;
}
.tree-container-b-minus-btn {
  border-radius: 100% !important;
  width: 20px !important;
  height: 20px !important;
  color: whitesmoke !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  position: absolute !important;
  top: 5px !important;
  right: 7px !important;
  cursor: pointer;
  font-size: large;
}
.tree-container-b-icon {
  position: relative !important;
  bottom: 0.6px !important;
}
.tree-container-b {
  font-size: 14px !important;
}
.tree-container-b .fa {
  font-size: 14px !important;
}

'use client';
import React, { useEffect, useState } from 'react';
function addNodes(tree, parentId, nestedData) {
  for (let node of tree) {
    if (node.id === parentId) {
      // Found the parent node, now add nested data
      node.children = []; // Ensure children array exists
      node.children.push(...nestedData); // Add the nestedData to children
      return true; // Return true to indicate the operation succeeded
    }
    // If current node has children, perform recursion
    if (node.children && node.children.length > 0) {
      const isAdded = addNodes(node.children, parentId, nestedData);
      if (isAdded) return true; // If data is added in a deeper level, stop further recursion
    }
  }
  return false; // Return false if the parentId was not found in the tree
}

const UserTree = ({ user, getContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = e => {
    e.stopPropagation();
    setIsOpen(!isOpen);

    if (user?.isExpanded) {
      if (isOpen) {
        setIsOpen(false);
      } else {
        // getContent(user.id);
        setIsOpen(true);
      }
    }
  };

  return (
    <li key={user.id}>
      <div
        className='cursor-pointer '
        onClick={e => {
          user?.isExpanded && handleClick(e, user.username, getContent, user);
        }}
      >
        <div className='d-flex flex-row justify-content-center'>
          <span className={user?.isExpanded ? '' : 'last-user'}>
            {isOpen ? (
              <i className='fa fa-refresh fa-minus mr-1'></i>
            ) : (
              user?.isExpanded && <i className='fa fa-refresh fa-plus mr-1'></i>
            )}{' '}
            {user.username}
          </span>
        </div>
      </div>

      {isOpen && user?.isExpanded && (
        <ul>
          {user.children.map(child => (
            <UserTree key={child.id} user={child} getContent={getContent} />
          ))}
        </ul>
      )}
    </li>
  );
};

export function App(props) {
  const [loader, setLoader] = useState(false);
  const [treeData, setTreeData] = useState(data);
  const getContent = async parentId => {
    if (!loader) {
      // setLoader(true);
      // const param = { parentId: parentId ?? 0 };
      // const response = await fetchApi(
      //   'team-matrix',
      //   JSON.stringify({ params: param }),
      //   'GET'
      // // );
      // if (response.statusCode === 200) {
      //   if (!parentId) {
      //     // setTreeData(response?.data?.data[0] ?? {});
      //   }
      //   setLoader(false);
      // }
    }
  };

  useEffect(() => {
    getContent();
  }, []);

  // ------------------------------------------------------------------------------------------------------------------------
  return (
    <div className='tree-container-b' onClick={e => console.log({ treeData })}>
      {treeData?.id ? (
        <ul>
          <UserTree
            data={data}
            getContent={getContent}
            user={data}
            key={treeData?.id}
          />
        </ul>
      ) : (
        ''
      )}
    </div>
  );
}

const data = {
  parent_id: 'eQ==',
  id: 'eA==',
  username: 'mcCoin',
  children: [
    {
      parent_id: 'eA==',
      id: 'ew==',
      username: 'abc12',
      children: [],
      isExpanded: false,
    },
    {
      parent_id: 'eA==',
      id: 'eg==',
      username: 'office12',
      children: [],
      isExpanded: false,
    },
    {
      parent_id: 'eA==',
      id: 'fQ==',
      username: 'raininfo1211',
      children: [],
      isExpanded: false,
    },
    {
      parent_id: 'eA==',
      id: 'fA==',
      username: 'raininfo22',
      children: [
        {
          parent_id: 'fA==',
          id: 'eP4=',
          username: 'Rain161',
          children: [],
          isExpanded: true,
        },
      ],
      isExpanded: true,
    },
    {
      parent_id: 'eA==',
      id: 'fw==',
      username: 'raininfo21',
      children: [],
      isExpanded: false,
    },
  ],
  isExpanded: true,
};

'use client';
import React, { useEffect, useState } from 'react';
function addNodes(tree, parentId, nestedData) {
  for (let node of tree) {
    if (node.id === parentId) {
      // Found the parent node, now add nested data
      node.children = []; // Ensure children array exists
      node.children.push(...nestedData); // Add the nestedData to children
      return true; // Return true to indicate the operation succeeded
    }
    // If current node has children, perform recursion
    if (node.children && node.children.length > 0) {
      const isAdded = addNodes(node.children, parentId, nestedData);
      if (isAdded) return true; // If data is added in a deeper level, stop further recursion
    }
  }
  return false; // Return false if the parentId was not found in the tree
}

const UserTree = ({ user, getContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = e => {
    e.stopPropagation();
    setIsOpen(!isOpen);

    if (user?.isExpanded) {
      if (isOpen) {
        setIsOpen(false);
      } else {
        // getContent(user.id);
        setIsOpen(true);
      }
    }
  };

  return (
    <li key={user.id}>
      <div
        className='cursor-pointer '
        onClick={e => {
          user?.isExpanded && handleClick(e, user.username, getContent, user);
        }}
      >
        <div className='d-flex flex-row justify-content-center'>
          <span className={user?.isExpanded ? '' : 'last-user'}>
            {isOpen ? (
              <i className='fa fa-refresh fa-minus mr-1'></i>
            ) : (
              user?.isExpanded && <i className='fa fa-refresh fa-plus mr-1'></i>
            )}{' '}
            {user.username}
          </span>
        </div>
      </div>

      {isOpen && user?.isExpanded && (
        <ul>
          {user.children.map(child => (
            <UserTree key={child.id} user={child} getContent={getContent} />
          ))}
        </ul>
      )}
    </li>
  );
};

export function App(props) {
  const [loader, setLoader] = useState(false);
  const [treeData, setTreeData] = useState(data);
  const getContent = async parentId => {
    if (!loader) {
      // setLoader(true);
      // const param = { parentId: parentId ?? 0 };
      // const response = await fetchApi(
      //   'team-matrix',
      //   JSON.stringify({ params: param }),
      //   'GET'
      // // );
      // if (response.statusCode === 200) {
      //   if (!parentId) {
      //     // setTreeData(response?.data?.data[0] ?? {});
      //   }
      //   setLoader(false);
      // }
    }
  };

  useEffect(() => {
    getContent();
  }, []);

  // ------------------------------------------------------------------------------------------------------------------------
  return (
    <div className='tree-container-b' onClick={e => console.log({ treeData })}>
      {treeData?.id ? (
        <ul>
          <UserTree
            data={data}
            getContent={getContent}
            user={data}
            key={treeData?.id}
          />
        </ul>
      ) : (
        ''
      )}
    </div>
  );
}

const data = {
  parent_id: 'eQ==',
  id: 'eA==',
  username: 'mcCoin',
  children: [
    {
      parent_id: 'eA==',
      id: 'ew==',
      username: 'abc12',
      children: [],
      isExpanded: false,
    },
    {
      parent_id: 'eA==',
      id: 'eg==',
      username: 'office12',
      children: [],
      isExpanded: false,
    },
    {
      parent_id: 'eA==',
      id: 'fQ==',
      username: 'raininfo1211',
      children: [],
      isExpanded: false,
    },
    {
      parent_id: 'eA==',
      id: 'fA==',
      username: 'raininfo22',
      children: [
        {
          parent_id: 'fA==',
          id: 'eP4=',
          username: 'Rain161',
          children: [],
          isExpanded: true,
        },
      ],
      isExpanded: true,
    },
    {
      parent_id: 'eA==',
      id: 'fw==',
      username: 'raininfo21',
      children: [],
      isExpanded: false,
    },
  ],
  isExpanded: true,
};

`;
