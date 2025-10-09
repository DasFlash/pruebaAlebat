

type Bird = {
    name: string
    canEat: boolean
    canDrink: boolean
    canSleep: boolean
    canFly: boolean
}

type Dog = Bird & {
    race: "Husky" | "Labrador" | "Chucho"
    age: number
    }

const myDog: Dog = {
    name: "Firulais",
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: false,
    race: "Labrador",
    age: 5
};
