import Sum from "../src/components/Sum";

test("To test the sum of two numbers", function (){

  const res = Sum(5,4)

  // Assertion

  expect(res).toBe(9)

})