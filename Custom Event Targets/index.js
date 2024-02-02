// 自定义事件 目标 window.EventTarget ƒ EventTarget() { [native code] }

class CustomEventTarget extends EventTarget {
    constructor(){
        super();
    }

    triggerCustomEvent(eventName, eventData){
        // 创建一个新的CustomEvent实例，并传递eventName和包含eventData的detail选项，来生成自定义事件
        const event = new CustomEvent(eventName, {detail: eventData});
        // 使用dispatchEvent方法将该事件分发到CustomEventTarget实例上
        this.dispatchEvent(event);
    }
}

const customTarget = new CustomEventTarget()

customTarget.addEventListener('customEvent',event => {
    console.log(`Custom event received with data: ${event.detail}`)
})

customTarget.triggerCustomEvent('customEvent','Hello, this is some custom events!')

// log
// Custom event received with data: Hello, this is some custom events!