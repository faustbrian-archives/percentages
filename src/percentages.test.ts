import { Percentage } from ".";

test("can calculate simple percentage differences", () => {
	expect(20).toBe(Percentage.differenceBetween(100, 120));

	expect(-20).toBe(Percentage.differenceBetween(100, 80));

	expect(20).toBe(Percentage.absoluteDifferenceBetween(100, 80));

	expect(-48).toBe(Math.round(Percentage.differenceBetween(862, 447)));
});

test("can calculate how much percentage a is of b", () => {
	expect(120).toBe(Percentage.calculate(120, 100));

	expect(50).toBe(Percentage.calculate(50, 100));
});

test("can get the percentage value of a number", () => {
	expect(40).toBe(Percentage.of(20, 200));

	expect(100).toBe(Percentage.of(50, 200));

	expect(-40).toBe(Percentage.of(-20, 200));
});

test("can get the percentage extension value", () => {
	expect(1.6).toBe(Percentage.extension(140, 3, 2));

	expect(2.4).toBe(Percentage.extension(140, 1, 2));
});
