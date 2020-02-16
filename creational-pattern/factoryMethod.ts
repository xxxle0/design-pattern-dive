
interface Transporter {
    delivery(): void
}

class Truck implements Transporter {
    delivery() {
        console.log('do something');
    }
}

class Ship implements Transporter {
    delivery() {
        console.log('do something else');
    }
}

abstract class Logistics {
    transporter: Transporter
    constructor(transporter: Transporter) {
        this.transporter = transporter
    }
    planDelivery() {
        console.log('kaka')
    }
    
    abstract createTransport(): Transporter
}

class RoadLogistics extends Logistics { 
    constructor() {
        const truckTransport = new Truck();
        super(truckTransport)
    }
    createTransport(): Truck{
        return new Truck()
    }
}

class SeaLogistics extends Logistics {
    constructor() {
        const shipTransport = new Ship();
        super(shipTransport)
    }
    createTransport(): Ship {
        return new Ship()
    }
}