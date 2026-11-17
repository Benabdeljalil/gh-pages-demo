import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home page", () => {
  it("displays the getting-started message and main links", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /to get started, edit the page\.tsx file\./i,
      }),
    ).toBeTruthy();
    expect(screen.getByRole("img", { name: "Next.js logo" })).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "Documentation" }).getAttribute("href"),
    ).toBe("https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app");
  });
});
