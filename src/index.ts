const floatval = (value: string | number): number => parseFloat(`${value}`) || 0;

export class Percentage {
	public static differenceBetween(a: number, b: number): number {
		return floatval(((b - a) / a) * 100);
	}

	public static absoluteDifferenceBetween(a: number, b: number): number {
		return floatval(Math.abs(Percentage.differenceBetween(a, b)));
	}

	public static calculate(a: number, b: number): number {
		return floatval((a * 100) / b);
	}

	public static of(percentage: number, number: number): number {
		return floatval(number * (percentage / 100));
	}

	public static extension(percentage: number, a: number, b: number): number {
		const movement: number = Math.abs(a - b);

		if (a > b) {
			return floatval(a - (movement * percentage) / 100);
		}

		return floatval(a + (movement * percentage) / 100);
	}
}
