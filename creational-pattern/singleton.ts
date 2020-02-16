class SingletonA {
    private static instance: SingletonA

    private constructor() {

    }

    public static getInstance(): SingletonA {
        if (!this.instance) {
            this.instance = new SingletonA()
        }  
        return this.instance
    }
}

const instanceA = SingletonA.getInstance()
const instanceB = SingletonA.getInstance();

if (instanceA === instanceB) {
    console.log('it works')
}