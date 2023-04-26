import React from "react";
import PagesLink from "./PagesLink";
import {
  Dashboard,
  Edit,
  ColorLens,
  ShoppingCart,
  AdminPanelSettings,
  Article,
  Logout,
} from "@mui/icons-material";
import { Divider } from "@mui/material";

const DrawerItems = () => {
  return (
    <>
      <PagesLink name="Dashboard" icon={<Dashboard />} url="/" />
      <Divider />
      <PagesLink name="Colors" icon={<ColorLens />} url="/colors" />
      <PagesLink name="Typography" icon={<Edit />} url="/types" />
      <Divider />
      <PagesLink name="Blogs" icon={<Article />} url="/blogs" />
      <PagesLink name="Admins" icon={<AdminPanelSettings />} url="/admins" />
      <PagesLink name="Products" icon={<ShoppingCart />} url="/products" />
      <PagesLink name="Logout" icon={<Logout />} url="/login" />
    </>
  );
};

export default DrawerItems;
