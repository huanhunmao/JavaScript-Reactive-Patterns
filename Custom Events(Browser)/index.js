// 基于 浏览器的 自定义 事件 
const customEvent = new CustomEvent('customEvent', {
    detail: 'Custom event data'   // Attach desired data{附需要的数据} to the event
})

const element = document.getElementById('.element-to-trigger-events')

element.addEventListener('customEvent', event => {
    console.log(`Subscriber 1 received custom event: ${event.detail}`)
})

element.addEventListener('customEvent', event => {
    console.log(`Subscriber 2 received custom event: ${event.detail}`)
})

// Trigger the custom event
element.dispatchEvent(customEvent)