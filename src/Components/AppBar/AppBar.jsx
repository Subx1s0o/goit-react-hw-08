import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import NavBar from "../NavBar/NavBar";
import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "../AuthMenu/AuthMenu";
import { header, header_container } from "./appBar.module.css";
export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <header className={header}>
      <div className={`container ${header_container}`}>
        <NavBar />
        {!isRefreshing && <div>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</div>}
      </div>
    </header>
  );
}
