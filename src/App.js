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
import LayoutPage from "./layout/layoutPage";
import HelpLayout from "./layout/help";
import Faq from "./pages/help/faq";
import Contact from './pages/help/contact'
import NotFound from "./pages/notfound";
import CareersLayout from "./layout/carreerLayout";
import Careers, { CareersLoader } from "./pages/careers/careers";
import CareersDetail from "./pages/careers/careersDetail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutPage/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout/>}>
          <Route path="faq" element={<Faq/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
        <Route to='careers' element={<CareersLayout/>}>
          <Route index 
          element={<Careers/>}
          loader={<CareersLoader/>}
          />
          <Route path=":id" element={<CareersDetail/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    )
  );
  return (
   
    <RouterProvider router={router}/>
  )
  
}

export default App;
