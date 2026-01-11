import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Ingredients from "./components/Ingredients";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';

const AppLayout = () => {
  return (
    <div className="main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,       // component name as string
    children: [
      {
        path: '/',
        Component: Body,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/contact',
        Component: Contact,
      },
      {
        path: '/ingredients/:resId',
        Component: Ingredients,
      }
    ],
    errorElement: <Error />,
  }

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);