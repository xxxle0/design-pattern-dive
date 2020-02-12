
class RoundPeg {
    radius: number;
    constructor(radius: number) {
        this.radius = radius
    }
    getRadius(): number {
        return this.radius
    }
}

class SquarePeg { 
    width: number 
    constructor(width: number) {
        this.width = width
    }

    SquarePeg(width: number) {

    }

    getWidth(): number {
        return this.width
    }

}

class SquarePegAdapter extends RoundPeg {
    squarePeg: SquarePeg
    constructor(squarePeg: SquarePeg) {
        super(squarePeg.width);
        this.squarePeg = squarePeg
    }

    getRadius(): number {
        return this.squarePeg.getWidth() * Math.sqrt(2) / 2
    }
}

const round = new RoundPeg(1);
const square = new SquarePeg(2);
const squareToRound = new SquarePegAdapter(square);
