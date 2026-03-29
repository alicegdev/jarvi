import { render, screen, fireEvent } from "@testing-library/react";
import ApplyForm from "../components/ApplyForm";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({})
  })
);

test("submits application", async () => {
  render(<ApplyForm />);

  fireEvent.change(screen.getByPlaceholderText(/first name/i), {
    target: { value: "Jane" }
  });

  fireEvent.change(screen.getByPlaceholderText(/last name/i), {
    target: { value: "Doe" }
  });

  fireEvent.change(screen.getByPlaceholderText(/email/i), {
    target: { value: "jane@doe.com" }
  });

  fireEvent.click(screen.getByText(/submit/i));

  expect(fetch).toHaveBeenCalled();
});