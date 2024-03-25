import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home/Home';
import Appliedjobs from './components/Appliedjobs/Appliedjobs';
import Blog from './components/Blogs/Blog';
import Job from './components/Job/Job';
import Statistics from './components/Statistics/Statistics';
import ErrorPages from './components/ErrorPage/ErrorPages';
import JobsDetails from './components/JobsDetails/JobsDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        errorElement: <ErrorPages></ErrorPages>
      },
      {
        path: '/applied',
        element: <Appliedjobs></Appliedjobs>
      },
      {
        path: '/jobs',
        element: <Job></Job>
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/job/:id',
        element: <JobsDetails></JobsDetails>
      },
     
       

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
