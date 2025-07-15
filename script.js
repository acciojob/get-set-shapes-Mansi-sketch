//complete this code
class Rectangle {
	constructor(width: number, height: number){
		this.width = width;
		this.height = height;
	}
	get ModifiedWidth(){
		return this.width;
	}
	get ModifiedHeight(){
		return this.height;
	}
	getArea(): number{
		return this.width * this.height;
	}
}

class Square extends Animal {
	constructor(width: number, height: number,side: number){
		super(width: number, height: number);
		this.side = side;
	}
	
	getPerimeter(): number{
		return 4 * this.side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
