import { Fragment } from "react";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Mainlayout from './components/Mainlayout'
import AboutPage from "./pages/About/AboutPage";
import HomePage from './pages/Home/HomePage'

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Mainlayout />,
        errorElement:'error',
        children: [
          {
            path: "about",
            element: <AboutPage />,
          },
          {
            index:true,
            element:<HomePage/>
          },
          // {
          //   path: "contact",
          //   element:<ContactPage/>
          // }
        ],
      },
    ]
  );
  
  return (
    <Fragment>
        <RouterProvider router={router} />
    </Fragment>
  )
}

export default App
