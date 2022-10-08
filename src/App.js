import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import ErrorPage from './components/ErrorPage/ErrorPage';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import { productsAndCartLoader } from './Loaders/productsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>,
          loader: () => fetch('products.json')
        },

        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'orders',
          element: <Orders></Orders>,
          loader: productsAndCartLoader
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'login',
          element: <Login />
        }
      ]

    },

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
