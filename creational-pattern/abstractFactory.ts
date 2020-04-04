interface Product {
    hasA()
    hasB()
    hasC()
}

class ProductA implements Product {
    hasA(){}
    hasB(){}
    hasC(){}
}

class ProductB implements Product {
    hasA(){}
    hasB(){}
    hasC(){}
}

class ProductC implements Product {
    hasA(){}
    hasB(){}
    hasC(){}
}

interface Factory {
    createProductA()
    createProductB()
    createProductC()
}

class FactoryAA implements Factory {
    createProductA() {
        return new ProductA()
    } 
    createProductB() {
        return new ProductB()
    }
    createProductC() {
        return new ProductC()
    }
}


class FactoryAB implements Factory {
    createProductA() {
        return new ProductA()
    } 
    createProductB() {
        return new ProductB()
    }
    createProductC() {
        return new ProductC()
    }
}