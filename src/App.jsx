import "./css/App.css";

import Layout from "./Components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import RestrictedRoute from "./Components/RestrictedRoute";
import PrivateRoute from "./Components/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
function App() {
  const Home = lazy(() => import("./pages/HomePage/HomePage"));
  const Register = lazy(() => import("./pages/RegisterPage/RegisterPage"));
  const Login = lazy(() => import("./pages/LoginPage/LoginPage"));
  const Contacts = lazy(() => import("./pages/ContactsPage/ContactsPage"));

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <p>Refreshing...</p>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<Login />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
