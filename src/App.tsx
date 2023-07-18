import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {Layout} from './components/layout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout>Home</Layout>,
  },
]);

export const App = () =>{
  return (
    <RouterProvider router={router} />
  )
}
