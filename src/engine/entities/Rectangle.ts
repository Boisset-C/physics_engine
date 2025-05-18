import type { Shape } from "../types/index";

export class Rectangle implements Shape {
	id: string;
	x: number;
	y: number;
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
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
	}

	//draw rectangle inside of canvas element
	draw(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}

	//if all is true --> mouse is inside of rectangle
	//to be used as condition to select triangle
	contains(mouseX: number, mouseY: number) {
		return (
			mouseX >= this.x && // mouse is to the right of left edge
			mouseX <= this.x + this.width && // mouse is to the left of right edge
			mouseY >= this.y && // mouse is below the top edge
			mouseY <= this.y + this.height // mouse is above bottom edge
		);
	}

	getPosition() {
		return { x: this.x, y: this.y };
	}

	setPosition(x: number, y: number): void {
		this.x = x;
		this.y = y;
	}
}
