export type Scalar = {
	magnitude: number;
};

export type Vector2d = {
	magnitude: number;
	direction: number;
	unit: "m/s" | "m/s²" | "N" | "px/s" | "px/s²";
	directionUnit: "°";
};

export type Velocity = Vector2d;

export type Acceleration = Vector2d;

export type Force = Vector2d;

export type Time = {
	magnitude: number;
	units: "s";
};

export type Position = {
	Ycoordinate: number;
	Xcoordinate: number;
};
