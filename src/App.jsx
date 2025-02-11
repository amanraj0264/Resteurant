import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from './pages/contact/Contact.jsx';
import { Shop } from './pages/shop/Shop.jsx';
import { Menu } from './pages/menu/Menu.jsx';
import { About } from './pages/about/About.jsx';
import { Home } from './pages/home/Home.jsx';
import AppLayout from './layouts/AppLayout.jsx';

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


