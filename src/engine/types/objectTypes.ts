import type { Position } from "./utilTypes";

export interface Shape {
	id: string;
	draw(ctx: CanvasRenderingContext2D): void;
	contains(pos: Position): boolean;
	getPosition(): Position;
	setPosition(pos: Position): void;
}
