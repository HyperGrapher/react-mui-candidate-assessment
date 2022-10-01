import { capitalizeFirstLetter, capitalizeEachWord } from "./capitalize";

it("should assert first letter capitalized", () => {
	expect(capitalizeFirstLetter("react testing library")).toBe("React testing library");
});
it("should assert first letter of each word is capitalized", () => {
	expect(capitalizeEachWord("react testing library")).toBe("React Testing Library");
});
