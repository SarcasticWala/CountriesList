import { createRoot } from 'react-dom/client'
import Contact from './components/Contact'
import App from './App'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
        path:'/contact',
        element: <Contact />,
    },
  ]);
const root = createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={router}/>)