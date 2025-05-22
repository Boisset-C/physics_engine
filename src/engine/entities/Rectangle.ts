import { Vector2d } from "../utilities/Vector2d";
import type { Shape, Position } from "../types/index";

export class Rectangle implements Shape {
	id: string;
	position: Position;
	width: number;
	height: number;
	color: string;
	isDragging: boolean = false;
	offsetX: number = 0;
	offsetY: number = 0;
	velocity: Vector2d = new Vector2d(0, 0);
	constructor(
		id: string,
		x: number,
		y: number,
		width: number,
		height: number,
		color = "blue"
	) {
		this.id = id;
		this.position = {
			Xcoordinate: x,
			Ycoordinate: y,
		};
		this.width = width;
		this.height = height;
		this.color = color;
	}

	//draw rectangle inside of canvas element
	draw(ctx: CanvasRenderingContext2D) {
		const { Xcoordinate, Ycoordinate } = this.position;
		ctx.fillStyle = this.color;
		ctx.fillRect(Xcoordinate, Ycoordinate, this.width, this.height);
	}

	//if all is true --> mouse is inside of rectangle
	//to be used as condition to select triangle
	contains(pos: Position): boolean {
		const { Xcoordinate: mouseX, Ycoordinate: mouseY } = pos;
		const { Xcoordinate, Ycoordinate } = this.position;
		return (
			mouseX >= Xcoordinate && // mouse is to the right of left edge
			mouseX <= Xcoordinate + this.width && // mouse is to the left of right edge
			mouseY >= Ycoordinate && // mouse is below the top edge
			mouseY <= Ycoordinate + this.height // mouse is above bottom edge
		);
	}

	getPosition(): Position {
		return this.position;
	}

	setPosition(pos: Position): void {
		this.position.Xcoordinate = pos.Xcoordinate;
		this.position.Ycoordinate = pos.Ycoordinate;
	}
}
