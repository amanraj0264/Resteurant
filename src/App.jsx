import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from './pages/contact/Contact';
import { Shop } from './pages/shop/Shop';
import { Menu } from './pages/menu/Menu';
import { About } from './pages/about/About';
import { Home } from './pages/home/Home';
import AppLayout from './layouts/AppLayout';

const App = () => {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <AppLayout />,
      children: [

        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/about",
          element: <About />,
        },


        {
          path: "/menu",
          element: <Menu />,
        },

        {
          path: "/shop",
          element: <Shop />,
        },

        {
          path: "/contact", 
          element: <Contact />,
        },



      ]
    },




  ]);

  return <RouterProvider router={router} />;
};

export default App;


