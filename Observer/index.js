// 主体
class Subject{
    constructor(){
        this.observers = []
    }

    addObserver(observer){
        this.observers.push(observer)
    }

    // Remove an observer from the list
    removeObserver(observer){
        const index = this.observers.indexOf(observer)

        if(index !== -1){
            this.observers.splice(index, 1)
        }
    }

    // Notify all observers about changes
    notify(){
        this.observers.forEach(observer => observer.update())
    }
}

// 观察者 
class Observer{
    constructor(name){
        this.name = name
    }

    // Update method called when notified
    update(){
        console.log(`${this.name} received an update.`);
    }
}

const subject = new Subject()
const observer1 = new Observer('Observer 1')
const observer2 = new Observer('Observer 2')
const observer3 = new Observer('Observer 3')
const observer4 = new Observer('Observer 4')
const observer5 = new Observer('Observer 5')

// Add observers to the subject
subject.addObserver(observer1)
subject.addObserver(observer2)
subject.addObserver(observer3)
subject.addObserver(observer4)
subject.addObserver(observer5)

// Notify observers about changes
subject.notify()
// logs
// Observer 1 received an update.
// Observer 2 received an update.
// Observer 3 received an update.
// Observer 4 received an update.
// Observer 5 received an update.