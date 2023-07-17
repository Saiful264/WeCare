import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';


const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage/>,
    // children: [
    //   {
    //     path: "/",
    //     element: <Home />,
    //   }
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
