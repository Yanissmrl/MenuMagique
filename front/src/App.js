import './index.css';
import './styles/App.css';
import Layout from './components/layout/Layout.jsx';
import Login from './routes/Login';
import Register from './routes/Register';
// import ErrorPage from './components/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FindRecipe from './routes/FindRecipe';
import AddRecipe from './routes/AddRecipe';
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
        {
          path: '/AddRecipe',
          element: <AddRecipe />
        },
      ]
    }
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
