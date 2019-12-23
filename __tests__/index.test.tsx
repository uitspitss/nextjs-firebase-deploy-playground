import React from "react";
import { mount } from "enzyme";
import { render } from "@testing-library/react";

import App from "#/pages/index";

describe("With Enzyme", () => {
  it('Shows "🚀"', () => {
    const app = mount(<App />);
    expect(app.find("p").text()).toEqual("🚀");
  });
});

describe("With React Testing Library", () => {
  it('Shows "🚀"', () => {
    const { getByText } = render(<App />);
    expect(getByText("🚀")).not.toBeNull();
  });
});

describe("With React Testing Library SnapShot", () => {
  it("Should match Snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
