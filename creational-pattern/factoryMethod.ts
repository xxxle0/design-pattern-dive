
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

class Logistics {
    transporter: Transporter
    constructor(transporter: Transporter) {
        this.transporter = transporter
    }
    planDelivery() {

    }
    
    createTransport() {
        
    }
}

class RoadLogistics extends Logistics { 
    constructor() {
        const truckTransport = new Truck();
        super(truckTransport)
    }
    planDelivery() {
        
    }
}

class SeaLogistics extends Logistics {
    constructor() {
        const shipTransport = new Ship();
        super(shipTransport)
    }
    planDelivery() {

    }
}