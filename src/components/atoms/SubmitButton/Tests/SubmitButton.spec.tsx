import React from "react";
import { shallow } from "enzyme";
import SubmitButton from "../SubmitButton";

describe("Button component", () => {
    const clickFn = jest.fn();

    it("should be clickable", () => {
        const component = shallow(
            <SubmitButton onClick={clickFn} canClick>
                게시
            </SubmitButton>,
        );

        component.simulate("click");

        expect(clickFn).toHaveBeenCalled();
    });

    it("match snapshot", () => {
        const component = shallow(
            <SubmitButton onClick={clickFn} canClick>
                게시
            </SubmitButton>,
        );

        expect(component).toMatchSnapshot();
    });
});
