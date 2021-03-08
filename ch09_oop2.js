class Car{

    constructor(make, model){
        this.make = make;
        this.model = model;
        this._userGears = ['p','n','r','d'];
        this._userGear = this._userGears[0];
    }

    get userGear(){
        return this._userGear;
    }
    set userGear(value){
        if(this.userGears.indexOf(gear) < 0) throw new Error(`invalid gear: ${gear}`);
        this._userGear = gear;
    }
    shift(gear){
        this.userGear = gear;
    }
}

const c1 = new Car("TESLA", "Model S");
const c2 = new Car("HYUNDAI", "Genesis");
c1.shift = 'p';
c2.shift = 'd';

console.log(c1 instanceof Car, c1);
console.log(c2 instanceof Car, c2);

