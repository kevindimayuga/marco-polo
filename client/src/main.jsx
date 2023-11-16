import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginForm from './components/LoginForm.jsx'
import SignupForm from './components/SignupForm.jsx'
import ItemList from './components/ItemList.jsx'
import FoundItemForm from './components/FoundItemForm.jsx'
import LostItemForm from './components/LostItemForm.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LoginForm />
      }, {
        path: '/loginform',
        element: <LoginForm />
      }, {
        path: '/itemlist',
        element: <ItemList />
      },
      {
        path: '/founditemform',
        element: <FoundItemForm />
      },
      {
        path: '/lostitemform',
        element: <LostItemForm />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={router} />
)
