//Kinematics Types

export type Velocity = {
	magnitude: number;
	direction: "up" | "down";
	unit: "m/s" | "px/s";
};

export type Acceleration = {
	magnitude: number;
	direction: "up" | "down";
	unit: "m/s²" | "px/s²";
};

export type Time = {
	magnitude: number;
	units: "s";
};

export type Position = {
	magnitude: number;
	unit: "m";
};
