import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";
// import img0 from "./0.png";
// import img1 from "./1.png";
// import img2 from "./2.png";
// import img3 from "./3.png";
// import img4 from "./4.png";
// import img5 from "./5.png";
// import img6 from "./6.png";


it("renders without crashing", function () {
  render(<Snowman />);
});

it("matches snapshot on lose game", function () {
  const { container } = render(
    <Snowman />
  );
  const zBtn = container.querySelector(".z");
  fireEvent.click(zBtn);
  fireEvent.click(zBtn);
  fireEvent.click(zBtn);
  fireEvent.click(zBtn);
  fireEvent.click(zBtn);
  fireEvent.click(zBtn);

  // expect(container).toContainHTML("Game Over!")
  expect(container).toMatchSnapshot();
});

// it("works when you click on the right arrow", function () {
//   const { container } = render(
//     <Snowman photos={TEST_IMAGES} title="images for testing" />
//   );