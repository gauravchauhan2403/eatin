import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore";
import Header from "../src/components/Header.js";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

test("Should load Header Component with a login Button", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  // const loginButton = screen.getByText("login");
  const loginButton = screen.getByRole("button", {name: "Login"});

  expect(loginButton).toBeInTheDocument();
});

test("Should load Cart component in header", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  const CartItems = screen.getByText(/Cart/);
  // here we are using regex for find cart component as the numbers might be changed later.

  expect(CartItems).toBeInTheDocument();
});

test("Should load Cart component in header", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name: "Login"});
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", {name:"Logout"});

  expect(logoutButton).toBeInTheDocument();
});