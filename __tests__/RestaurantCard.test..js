import {render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import appStore from "../src/utils/appStore.js";
import Card from "../src/components/Card";
import MOCK_DATA from "../__mock__/CardMockData.json";
import "@testing-library/jest-dom";

test("Should render Card component with props", () => {
  render (
    <BrowserRouter>
        <Provider store={appStore}>
          <Card resData={MOCK_DATA} />
        </Provider>
        </BrowserRouter>
  
);

  const name= screen.getByText("Classic Margherita Pizza")

  expect(name).toBeInTheDocument();

});