import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Links } from '../constants/links';

import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ToDoList } from '../pages/ToDoList';
import { UserPage } from '../pages/UserPage';
import { Characters } from '../pages/Characters';
import { CharacterById } from '../pages/CharacterById';
import { FridgePage } from '../pages/FridgePage';
import { AddProductPage } from '../pages/AddProductPage';

const router = createBrowserRouter([
    {
        path: Links.HOMEPAGE,
        element: <HomePage />
    },
    {
        path: Links.LOGIN,
        element: <LoginPage />
    },
    {
        path: Links.REGISTER,
        element: <RegisterPage />
    },
    {
        path: Links.TODOLIST,
        element: <ToDoList />
    },
    {
        path: Links.USER,
        element: <UserPage />
    },
    {
      path: Links.CHARACTERS,
      element: <Characters />,
      children: [
        {
          path: ':id',
          element: <CharacterById />
        }
      ]
    },
    {
      path: Links.FRIDGE,
      element: <FridgePage />
    },
    {
      path: Links.ADD_PRODUCT,
      element: <AddProductPage onAddProduct={(product) => console.log(product)} />
    }
]);

export const Router = () => {
    return <RouterProvider router={router} />;
}