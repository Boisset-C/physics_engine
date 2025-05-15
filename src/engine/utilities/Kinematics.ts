import type { Velocity, Acceleration, Time, XPosition } from "../types";

//Velocity --> has a magnitude: number, direction: "-" or "+", unit: "m/s"
export function velocity(x: number, t: Time): Velocity {
	return {
		magnitude: x / t.magnitude,
		direction: "up",
		unit: "m/s",
	};
}

//Acceleration --> has a magnitude: number, direction: "-" or "+", unit: "m/s²"
export function acceleration(v: Velocity, t: Time): Acceleration {
	return {
		magnitude: v.magnitude / t.magnitude,
		direction: "up",
		unit: "m/s²",
	};
}

/*
 * EQUATION: POSITION-TIME
 * FORMULA --> x = x0 + v0 * t + 1/2 * a * t^2
 * calculate the position (x) at any given time "t" given the variables:
 * 1. initial position: (x0)
 * 2. initial velocity: (v0)
 * 3. acceleration: (a)
 * 4. time elapsed: (t)
 */
function positionTime(): XPosition {}

/* EQUATION: VELOCITY-TIME
 * FORMULA --> v = v0 + at
 * calculate final velocity of an object under constant acceleration given the variables:
 * 1. initial velocity: (v0)
 * 2. accelaration: (a)
 * 3 .time: (t)
 */

/* EQUATION: VELOCITY-DISPLACEMENT
 * FORMULA --> v^2 = v0^2 + 2 * a * Δx
 * Calculate Final Velocity of an object without time given the variables:
 * 1. initial velocity: (v0)
 * 2. acceleration: (a)
 * 3. displacement: (Δx) --> the difference in position of an object
 */

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
