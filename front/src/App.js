import './styles/App.css';
import Layout from './components/layout/Layout.jsx';
// import ErrorPage from './components/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      // errorElement: <ErrorPage />,
      // children: [
      //   {
      //     path: '/login',
      //     element: <Login />
      //   },
      // ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
