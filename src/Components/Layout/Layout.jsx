import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";

export default function Layout({ children }) {
  return (
    <div className="container">
      <AppBar />
      <Suspense fallback={"loading..."}>{children}</Suspense>
    </div>
  );
}
