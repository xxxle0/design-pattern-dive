interface Shape {
    x: number
    y: number
    color: string
    clone(): Shape 
}

class Rectangle implements Shape {
    x: number
    y: number
    color: string
    constructor(source: Rectangle) {
        this.x = source.x
        this.y = source.y
        this.color = source.color
    } 
    public clone(): Shape {
        const clone = Object.create(this)
        return clone
    }
}


