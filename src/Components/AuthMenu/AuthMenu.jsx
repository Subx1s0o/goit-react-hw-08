import { Link } from "react-router-dom";

export default function AuthMenu() {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
