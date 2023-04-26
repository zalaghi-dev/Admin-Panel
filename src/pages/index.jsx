import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Error404 from "./Error404";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Colors from "./Colors";
import Types from "./Types";
import Blogs from "./Blogs";
import Admins from "./Admins";
import Products from "./Products";
export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<Error404 />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="colors" element={<Colors />} />
        <Route path="types" element={<Types />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="admins" element={<Admins />} />
        <Route path="products" element={<Products />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </>
  )
);
