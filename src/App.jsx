import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';

import Home from './ui/Home';
import Error from './ui/Error';
import AppLayout from './ui/AppLayout';
import Menu from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';

import { isValidPhoneNumber } from './utils/helpers';
import { createOrder, getMenu, getOrder } from './services/apiRestaurant';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: async () => await getMenu(),
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const data = Object.fromEntries(formData);

          const order = {
            ...data,
            cart: JSON.parse(data.cart),
            priority: data.priority === 'on',
          };

          const errors = {};
          if (!isValidPhoneNumber(order.phone))
            errors.phone = 'Please give us your correct phone number';

          if (Object.keys(errors).length > 0) return errors;

          const newOrder = await createOrder(order);

          return redirect(`/order/${newOrder.id}`);
        },
      },
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
