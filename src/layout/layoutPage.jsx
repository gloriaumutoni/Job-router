import { NavLink,Outlet } from "react-router-dom";


const LayoutPage = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to='help'>Help</NavLink>
        </nav>
      </header>
      <main>
<Outlet/>
      </main>
    </div>
  );
};

export default LayoutPage;
