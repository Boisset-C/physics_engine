import type { Velocity, Acceleration, Time, Position } from "../types";
import type { Vector2d } from "./index";

//Velocity --> has a magnitude: number, direction: "-" or "+", unit: "m/s"
// export function velocity(x: number, t: Time): Velocity {
// 	let mag: number = x / t.magnitude;
// 	let dir: "+" | "-" = mag < 0 ? "-" : "+";

// 	return {
// 		magnitude: Math.abs(mag),
// 		direction: dir,
// 		unit: "m/s",
// 	};
// }

// //Acceleration --> has a magnitude: number, direction: "-" or "+", unit: "m/s²"
// // export function acceleration(v: Velocity, t: Time): Acceleration {
// // 	let mag: number = v.magnitude / t.magnitude;
// // 	let dir: "+" | "-" = mag < 0 ? "-" : "+";

// // 	return {
// // 		magnitude: Math.abs(mag),
// // 		direction: dir,
// // 		unit: "m/s²",
// // 	};
// }

/*
 * EQUATION: POSITION-TIME
 * FORMULA --> x = x0 + v0 * t + 1/2 * a * t^2
 * calculate the position (x) at any given time "t" given the variables:
 * 1. initial position: (x0)
 * 2. initial velocity: (v0)
 * 3. acceleration: (a)
 * 4. time elapsed: (t)
 */

//!!!Will need to refactor
export function positionTime(
	position: Position,
	v: Vector2d,
	a: Vector2d,
	t: Time
): Position {
	const { x: vx, y: vy } = v.toXY();
	const { x: ax, y: ay } = a.toXY();

	return {
		Xcoordinate:
			position.Xcoordinate +
			vx * t.magnitude +
			0.5 * ax * t.magnitude ** 2,
		Ycoordinate:
			position.Ycoordinate +
			vy * t.magnitude +
			0.5 * ay * t.magnitude ** 2,
	};
}

/* EQUATION: VELOCITY-TIME
 * FORMULA --> v = v0 + at
 * calculate final velocity of an object under constant acceleration given the variables:
 * 1. initial velocity: (v0)
 * 2. accelaration: (a)
 * 3 .time: (t)
 */
export function velocityTime(v: Vector2d, a: Vector2d, t: Time): Vector2d {
	return v.add(a.scale(t.magnitude));
}

//!!!!!!!!!NEEEEEED TO FIX!!!!!!!!!!!!!!!!!!!!!
/* EQUATION: VELOCITY-DISPLACEMENT
 * FORMULA --> v^2 = v0^2 + 2 * a * Δx
 * Calculate Final Velocity of an object without time given the variables:
 * 1. initial velocity: (v0)
 * 2. acceleration: (a)
 * 3. displacement: (Δx) --> the difference in position of an object
//  */
// export function velocityDisplacement(
// 	v: Velocity,
// 	a: Acceleration,
// 	position: Position
// ): Velocity {
// 	let mag = Math.pow(v.magnitude, 2) + 2 * a.magnitude * position.magnitude;
// 	let dir: "+" | "-" = mag < 0 ? "-" : "+";

// 	return {
// 		magnitude: mag,
// 		direction: dir,
// 		unit: "m/s",
// 	};
// }

//!!!!!!!!!NEEEEEED TO FIX!!!!!!!!!!!!!!!!!!!!!
/*
 * EQUATION: AVERAGE-VELOCITY-POSITION
 * FORMULA --> x = x0 + 1/2(v0^x + vx)t
 * Calculate the position (x) of an object when its motion is governed by constant
 * accelaration given the variables:
 * 1. initial position: x0 (meters)
 * 2. initial velocity: v0x (m/s)
 * 3. final velocity: vx (m/s)
 * 4. time elapsed: t (seconds)
 */
// export function averageVelocityPosition(
// 	p: Position,
// 	initialV: Velocity,
// 	finalV: Velocity,
// 	t: Time
// ): Position {
// 	let mag =
// 		p.magnitude +
// 		(1 / 2) * (initialV.magnitude + finalV.magnitude) * t.magnitude;
// 	let dir: "+" | "-" = mag < 0 ? "-" : "+";
// 	return {
// 		magnitude: mag,
// 		direction: dir,
// 		unit: "m",
// 	};
// }
