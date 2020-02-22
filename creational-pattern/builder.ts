interface Builder {
    reset(): void
    stepA(): void
    stepB(): void
    getResult(): void
}

class BuilderA implements Builder {
    reset() {

    }
    stepA() {

    }
    stepB() {
        
    }
    getResult() {

    }
}

class BuilderB implements Builder { 
    reset() {

    }
    stepA() {

    }
    stepB() {
        
    }
    getResult() {

    }
}

class Director {
    private builder: Builder
    constructor(builder: Builder) {
        this.builder = builder
    }
    buildAHouse() {
        this.builder.stepA()
        this.builder.stepB()
    }
}

const builderA = new BuilderA() 
const builderB = new BuilderB()
const director = new Director(builderA)
director.buildAHouse()