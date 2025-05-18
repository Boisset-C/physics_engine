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
			coordinateX: x,
			coordinateY: y,
			unit: null,
		};
		this.width = width;
		this.height = height;
		this.color = color;
	}

	//draw rectangle inside of canvas element
	draw(ctx: CanvasRenderingContext2D) {
		const { coordinateX, coordinateY } = this.position;
		ctx.fillStyle = this.color;
		ctx.fillRect(coordinateX, coordinateY, this.width, this.height);
	}

	//if all is true --> mouse is inside of rectangle
	//to be used as condition to select triangle
	contains(pos: Position): boolean {
		const { coordinateX: mouseX, coordinateY: mouseY } = pos;
		const { coordinateX, coordinateY } = this.position;
		return (
			mouseX >= coordinateX && // mouse is to the right of left edge
			mouseX <= coordinateX + this.width && // mouse is to the left of right edge
			mouseY >= coordinateY && // mouse is below the top edge
			mouseY <= coordinateY + this.height // mouse is above bottom edge
		);
	}

	getPosition(): Position {
		return this.position;
	}

	setPosition(pos: Position): void {
		this.position = { ...pos };
	}
}
