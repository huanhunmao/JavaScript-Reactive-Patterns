// If you want to react to changes in objects, Proxy is the way to go.
//  It lets us achieve reactivity when setting or getting values of object fields.

const person = {
    name: 'John',
    age:18
}

const reactivePerson = new Proxy(person, {
    set(target, key, value){
        console.log(`Setting ${key} to ${value}`); // Setting name to Ppx Setting age to 32

        target[key] = value;

        return true
    },

    get(target, key){
        console.log(`Getting ${key}`); // Getting name Getting age

        return target[key];
    }
});

reactivePerson.name = 'Ppx'
console.log(reactivePerson.name); // Ppx

reactivePerson.age = 32
console.log(reactivePerson.age); // 32