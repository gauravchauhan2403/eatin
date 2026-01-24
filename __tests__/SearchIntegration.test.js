import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import MOCK_DATA from "../__mock__/ResListMockData.json";
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../src/components/Body";
import appStore from "../src/utils/appStore.js";
import { act } from "react"
import "@testing-library/jest-dom";

// dummy function created for fetch api function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA)
    }
  })
});


test("Should return the Body Component with Search", async () => {
  await act(async () => {
    render (
      <BrowserRouter>
      <Provider store={appStore}>
        <Body />
      </Provider>  
      </BrowserRouter>
    )
  });
 
  const SearchBtn = screen.getByRole("button", { name: "Search" });
  expect(SearchBtn).toBeInTheDocument();

});

test("Should search list of input item", async () => {
  await act(async () => {
    render (
      <BrowserRouter>
      <Provider store={appStore}>
        <Body />
      </Provider>  
      </BrowserRouter>
    )
  });

  const cardBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardBeforeSearch.length).toBe(30);
 
  const SearchBtn = screen.getByRole("button", { name: "Search" });
  const SearchInput = screen.getByTestId("searchInput");
  expect(SearchBtn).toBeInTheDocument();

  fireEvent.change(SearchInput, {target: {value: "Chicken"}});
  fireEvent.click(SearchBtn);

  const cardAfterSearch = screen.getAllByTestId("resCard");
  expect(cardAfterSearch.length).toBe(5);

});