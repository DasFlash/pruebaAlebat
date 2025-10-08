let race2: "Husky" | "Labrador" | "Chucho";

type Bird2 = {
    name: string
    canEat: boolean
    canDrink: boolean
    canSleep: boolean
    canFly: boolean
}

type Dog2 = Bird & {
    race: string
    age: number
    }

type Cat = {
    name: string;
    color: string;
    canSleep: boolean;
}
type Snake = {
    canEat: boolean;
    canDrink: boolean;
    canSleep: boolean;
}


const myDog2: Dog = {
    name: "Firulais",
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: false,
    race: "Labrador",
    age: 5
};

const cat: Cat = {
    name: "Michi",
    color: "Blanco",
    canSleep: true
};


const snake: Snake = {
    canEat: true,
    canDrink: true,
    canSleep: false
};