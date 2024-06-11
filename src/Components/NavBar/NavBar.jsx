import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { nav } from "./navBar.module.css";
export default function NavBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={nav}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
}
