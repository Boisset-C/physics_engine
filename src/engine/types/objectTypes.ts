export interface Shape {
	id: string;
	draw(ctx: CanvasRenderingContext2D): void;
	contains(x: number, y: number): boolean;
	getPosition(): { x: number; y: number };
	setPosition(x: number, y: number): void;
}
