const animalMethods = {
    eat: function eat(){
        return `O ${this.type} chamado ${this.name} está comendo`;
    },

    sleep: function sleep(amount) {
        if(this.energy < 100){
            return this.energy += amount
        } else {
            return `energy is full`
        }
    }
}

function Animal(type, name, age) {
    const animal = {}

    animal.type  = type
    animal.name = name
    animal.age = age
    animal.energy = 0;
    
    animal.eat = animalMethods.eat;
    animal.sleep = animalMethods.sleep;
    return animal
}

const animal1 = Animal('gato', 'Caco', 11)
console.log(animal1.sleep(15));
console.log(animal1.eat());
console.log(animal1.sleep(80));

console.log(animal1);
