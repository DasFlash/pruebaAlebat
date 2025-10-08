let race: "Husky" | "Labrador" | "Chucho";

type Bird1 = {
    name: string
    canEat: boolean
    canDrink: boolean
    canSleep: boolean
    canFly: boolean
}

type Dog1 = Bird & {
    race: string
    age: number
    }

const myDog1: Dog = {
    name: "Firulais",
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: false,
    race: "Labrador",
    age: 5
};
