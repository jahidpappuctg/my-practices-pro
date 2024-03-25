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
        path: '/listedbooks',
        element: <Appliedjobs></Appliedjobs>
      },
      {
        path: '/pagestoread',
        element: <Job></Job>
      },
 
      {
        path: '/job/:id',
        element: <JobsDetails></JobsDetails>,
        loader: () => fetch('./jobs.json')
      },
     
       

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
