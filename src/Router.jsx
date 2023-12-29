import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import MainPage from './Routes/MainPage/MainPage';
import Offer from './Routes/Offer/Offer';
import Gallery from './Routes/Gallery/Gallery';
import Shop from './Routes/Shop/Shop';
import Contact from './Routes/Contact/Contact';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, path: '', element: <MainPage /> },
        { path: '/oferta', element: <Offer /> },
        { path: '/galeria', element: <Gallery /> },
        { path: '/sklep', element: <Shop /> },
        { path: '/kontakt', element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
