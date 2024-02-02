// 发布订阅 模式
class PubSub{
    constructor(){
        // 初始化了 subscribers 对象，用于存储事件及其对应的订阅者（回调函数）数组
        this.subscribers = {}
    }

    // 订阅特定事件 比如此时 订阅的 就是 news 事件
    subscribe(event, callback){
        if(!this.subscribers[event]){
            // 该事件尚未有订阅者，会在 subscribers 中创建一个空数组
            this.subscribers[event] = []
        }

        // 将回调函数 callback 添加到事件的订阅者数组中
        this.subscribers[event].push(callback)
        // console.log('this.subscribers',this.subscribers);
        // this.subscribers { news: [ [Function (anonymous)] ] }
        // this.subscribers { news: [ [Function (anonymous)], [Function (anonymous)] ] }   
    }

    // 发布特定事件的消息
    publish(event,data){
        // 如果该事件有订阅者，将遍历订阅者数组，并对每个订阅者调用其回调函数，传递消息数据 data
        if(this.subscribers[event]){
            this.subscribers[event].forEach(callback => { // 这里的 callback 就是上面的方法 [ [Function (anonymous)] , xxx] 
                callback(data)
            })
        }
    }
}

// 实例化
const pubsub = new PubSub()

pubsub.subscribe('news', message => {
    console.log(`Subscriber 1 received news: ${message}`)
})
pubsub.subscribe('news', message => {
    console.log(`Subscriber 2 received news: ${message}`)
})

pubsub.publish('news', 'Latest headlines: ...')