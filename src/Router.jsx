import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import MainPage from './Routes/MainPage/MainPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [{ index: true, path: '', element: <MainPage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
