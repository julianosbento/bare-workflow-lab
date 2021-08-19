import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import type { UseCounter } from "../../../hooks/use-counter";

import Counter from "../counter";

const mockUseCounter: UseCounter = {
  counter: 0,
  onAdd: jest.fn(),
  onSubtract: jest.fn(),
};

jest.mock("../../../hooks/use-counter", () => jest.fn(() => mockUseCounter));

describe("<Counter />", () => {
  beforeEach(() => jest.clearAllMocks());

  it("renders default layout", () => {
    const { getByText, getByA11yLabel, getByTestId } = render(<Counter />);

    expect(getByText("somar")).toBeTruthy();
    expect(getByText("subtrair")).toBeTruthy();

    expect(getByTestId("components.counter.add-button")).toBeTruthy();

    expect(getByA11yLabel("Pressione para somar um do contador")).toBeTruthy();
    expect(
      getByA11yLabel("Pressione para subtrair um do contador")
    ).toBeTruthy();
  });

  it("will increment counter", () => {
    const { getByA11yLabel } = render(<Counter />);

    fireEvent.press(getByA11yLabel("Pressione para somar um do contador"));

    expect(mockUseCounter.onAdd).toHaveBeenCalledTimes(1);
  });

  it("will decrement counter", () => {
    const { getByA11yLabel } = render(<Counter />);

    fireEvent.press(getByA11yLabel("Pressione para subtrair um do contador"));

    expect(mockUseCounter.onSubtract).toHaveBeenCalledTimes(1);
  });
});
