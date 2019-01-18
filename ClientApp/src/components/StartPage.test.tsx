import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import StartPage from "./StartPage";

configure({ adapter: new Adapter() });

test("App should render 'Hello world'", () => {
    const app = shallow(<StartPage />);
    const actual = app.find(".app");
    expect(actual).toEqual("Hello world");
});
