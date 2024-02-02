// If you don’t need to track all the fields in the objects, you can choose the specific one using Object.
// defineProperty or group of them with Object.defineProperties.

const person = {
    _originalName: 'John', // private property
}

Object.defineProperty(person, 'name', { // 重要是这个 name  这个名字 _originalName 可以随便取
    get(){
        console.log('Getting property name')
        return this._originalName;
    },
    set(value){
        console.log(`Setting property name to value ${value}`)   // Setting property name to value ppx
        this._originalName = value
    }   
})

console.log(person.name); // John
person.name = 'ppx' 