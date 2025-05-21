export type Scalar = {
	magnitude: number;
};

export type Vector2d = {
	magnitude: number;
	direction: number;
	magnitudeUnit: "N";
	directionUnit: "°";
};

export type Velocity = {
	magnitude: number;
	direction: "+" | "-";
	unit: "m/s" | "px/s";
};

export type Acceleration = {
	magnitude: number;
	direction: "+" | "-";
	unit: "m/s²" | "px/s²";
};

export type Time = {
	magnitude: number;
	units: "s";
};

export type Position = {
	coordinateY: number;
	coordinateX: number;
	unit: "m" | null;
};
