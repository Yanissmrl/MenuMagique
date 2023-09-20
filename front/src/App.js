import './styles/App.css';
import Layout from './components/layout/Layout.jsx';
import Login from './routes/Login';
import Register from './routes/Register';
// import ErrorPage from './components/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FindRecipe from './routes/FindRecipe';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/FindRecipe',
          element: <FindRecipe />
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
