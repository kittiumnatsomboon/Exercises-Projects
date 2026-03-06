import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Pages/Navbar';
import Login from './Pages/Login';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [ 
        {
          index: true, 
          element: <Homepage />,
        },
        {
          path: "about", 
          element: <About />,
        },
        {
          path: "contact", 
          element: <Contact />,
        },
        {
          path: "login", 
          element: <Login />,
        },
      ],
    },
]);
function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App
