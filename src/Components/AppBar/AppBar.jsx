import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import NavBar from "../NavBar/NavBar";
import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "../AuthMenu/AuthMenu";
import { selectIsRefreshing } from "../../redux/auth/selectors";
export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <header>
      <NavBar />
      {!isRefreshing && <div>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</div>}
    </header>
  );
}
