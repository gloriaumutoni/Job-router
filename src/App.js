import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    )
  );
  return (
    /* <header>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
      </nav>
    </header> */
    <RouterProvider router={router}/>
  )
  
}

export default App;
