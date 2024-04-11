import { beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, screen, render, fireEvent } from "@testing-library/react";
import Title from "../app/Title";

describe("Title", () => {
    it("Should show title and descrip all the time", () => {
        /* render */
        render(<Title title="TESING" descrip="DES" />);

        /* act */

        /* assert */
        expect(screen.getByText("TESING")).toBeDefined();
        expect(screen.getByText(/des/i)).toBeDefined();
    })
});