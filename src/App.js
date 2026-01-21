import { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Ingredients from "./components/Ingredients";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  // authenticate
  useEffect(() => {
    // we will make API call and send login and password and receive a data from server.
    const data = {
      name: "Gaurav chauhan"
    }
    setUserInfo(data.name);
  }, []);

  return (
    <Provider store={appStore} >
    <UserContext.Provider value={{userLoggedIn: userInfo, setUserInfo}}>
      <div className="main">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
    </Provider>
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
        path:'/grocery',
        element: (<Suspense fallback = {<h1>Loding....</h1>}>
          <Grocery />
        </Suspense>),
      },
      {
        path: '/ingredients/:resId',
        Component: Ingredients,
      },
      {
        path: '/cart',
        Component: Cart,
      }
    ],
    errorElement: <Error />,
  }

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);