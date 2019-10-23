// var name = '李四'
console.log('aaa')
console.log(self)
console.log(self.name)

postMessage('Hello World')


self.onmessage = ev => {
    postMessage(ev.data + '呵呵')
}