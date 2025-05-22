import { Vector2d } from "../utilities/Vector2d";

export class Gravity {
	private vector: Vector2d;

	constructor(magnitude: number = 9.8, direction: number = 90) {
		this.vector = new Vector2d(magnitude, direction);
	}

	get xCoordinate(): number {
		return this.vector.xCoordinate;
	}

	get yCoordinate(): number {
		return this.vector.yCoordinate;
	}

	getAcceleration(): Vector2d {
		return this.vector;
	}

	applyTo(velocity: Vector2d, deltaTime: number): Vector2d {
		const gravityEffect = this.vector.scale(deltaTime);
		return velocity.add(gravityEffect);
	}
}
