import type { Position } from "./utilTypes";
import { Vector2d } from "../utilities/Vector2d";

export interface Shape {
	id: string;
	velocity: Vector2d;
	position: Position;
	draw(ctx: CanvasRenderingContext2D): void;
	contains(pos: Position): boolean;
	getPosition(): Position;
	setPosition(pos: Position): void;
}
