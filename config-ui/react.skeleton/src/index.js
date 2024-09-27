import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createHashRouter, RouterProvider  } from 'react-router-dom';
import LandingPage from './content/landingPage';
<ADD_IMPORTS_HERE>


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      <ADD_ROUTES_HERE>
    ]
  },
])

ReactDOM.render(
    <RouterProvider router={router} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();