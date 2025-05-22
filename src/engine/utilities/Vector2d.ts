import type { Position } from "../types/index";

export class Vector2d {
	magnitude: number;
	direction: number;
	magUnit = "N";
	readonly dirUnit = "°";

	constructor(magnitude: number, direction: number) {
		this.magnitude = magnitude;
		this.direction = direction;
	}

	get xCoordinate(): number {
		return this.magnitude * Math.cos(this.degreesToRadians(this.direction));
	}

	get yCoordinate(): number {
		return this.magnitude * Math.sin(this.degreesToRadians(this.direction));
	}

	private degreesToRadians(degree: number): number {
		return (degree * Math.PI) / 180;
	}

	add(other: Vector2d): Vector2d {
		const x = this.xCoordinate + other.xCoordinate;
		const y = this.yCoordinate + other.yCoordinate;
		const magnitude = Math.sqrt(x ** 2 + y ** 2);
		const direction = (Math.atan2(y, x) * 180) / Math.PI;
		return new Vector2d(magnitude, direction);
	}

	scale(factor: number): Vector2d {
		return new Vector2d(this.magnitude * factor, this.direction);
	}

	getPosition(): Position {
		return {
			Xcoordinate: this.xCoordinate,
			Ycoordinate: this.yCoordinate,
		};
	}

	toXY(): { x: number; y: number } {
		return {
			x: this.xCoordinate,
			y: this.yCoordinate,
		};
	}
}
