import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";

describe("Contact us page test group", () => {
  test("should load Contact us Component", () => {
  // rendering component
  render( <Contact />);

  // getting query of headng, button, text etc..
  const heading = screen.getByRole('heading');

  // Assertion
  expect(heading).toBeInTheDocument();
});

test("should load Button Component", () => {
  // rendering component
  render( <Contact />);

  // getting query of headng, button, text etc..
  const button = screen.getByText('Submit');

  // Assertion
  expect(button).toBeInTheDocument();
});
  
});



it("should load 2 input Component", () => {
  // rendering component
  render( <Contact />);

  // getting query of headng, button, text etc..
  const InputBox = screen.getAllByRole('textbox');

  // Assertion
  expect(InputBox.length).toBe(2);
});
