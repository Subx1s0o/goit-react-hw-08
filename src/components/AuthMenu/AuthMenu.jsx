import { Link } from "react-router-dom";
import { link, divlink } from "./authMenu.module.css";
export default function AuthMenu() {
  return (
    <div className={divlink}>
      <Link className={link} to="/register">
        Register
      </Link>
      <Link className={link} to="/login">
        Login
      </Link>
    </div>
  );
}
