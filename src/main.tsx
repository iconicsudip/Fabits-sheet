import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home from './pages/Home'
// import MainLayout from './layouts/MainLayout'

const routes = [
  {
    path: '/',
    element: <div>Hello</div>,
    // children: [
    //   {
    //     path: '/',
    //     element: <Home />
    //   },
    //   {
    //     path: '*',
    //     element: <Home />
    //   }
    // ]
  },
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App >
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>,
)
