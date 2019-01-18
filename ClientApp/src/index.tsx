// Polyfills
import "core-js";
import "promise-polyfill";
import "eventsource-polyfill"; // For IE11 development-time, so we can do hot-reloading
import "whatwg-fetch";

import * as React from "react";
import { render } from "react-dom";

import { hot } from "react-hot-loader";

import App from "./app";

const HotApp = hot(module)(App);

render(
    <HotApp/>,
    document.getElementById("app")
);