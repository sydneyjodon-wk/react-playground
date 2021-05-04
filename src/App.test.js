import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("delete characters within the selectedRange", () => {
    debugger;
    render(
        <div>
            <label htmlFor="my-input">Example:</label>
            <input id="my-input" type="text" defaultValue="This is a bad example" />
        </div>
    );
    const input = screen.getByLabelText(/example/i);
    debugger;
    input.setSelectionRange(10, 13);
    userEvent.type(input, "good");

    expect(input).toHaveValue("This is a good example");
});
