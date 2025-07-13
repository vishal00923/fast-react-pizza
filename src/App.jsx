import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './ui/Home';
import Error from './ui/Error';
import AppLayout from './ui/AppLayout';
import Menu from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';

import { getMenu, getOrder } from './services/apiRestaurant';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: async () => await getMenu(),
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      { path: '/order/new', element: <CreateOrder /> },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: async ({ params }) => await getOrder(params.orderId),
        errorElement: <Error />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
