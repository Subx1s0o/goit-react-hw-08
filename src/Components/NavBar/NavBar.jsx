import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function NavBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className="">
      <NavLink to="/">Home</NavLink>;
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </div>
  );
}
