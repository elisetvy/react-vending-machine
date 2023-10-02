import { NavLink } from 'react-router-dom';

function Navbar() {

  let activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold",

  };

  let activeClassName = "underline";


  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/snacks/chips"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Chips
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/snacks/soda"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Soda
          </NavLink>
        </li>
        <li>
          <NavLink to="/snacks/candy">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : undefined
                }
              >
                Candy
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;