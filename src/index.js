import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

render(
    <div>
        <label htmlFor="my-input">Example:</label>
        <input id="my-input" type="text" defaultValue="This is a bad example" />
    </div>
);
const input = screen.getByLabelText(/example/i);
input.setSelectionRange(10, 13);
userEvent.type(input, "good");
