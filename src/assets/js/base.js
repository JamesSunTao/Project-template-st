function getComponent() {
    // 使用 异步的形式导入 lodash，default: _ 表示用 _ 代指 lodash
    return import('lodash').then(({ default: _ }) => {
      var element = document.createElement('div')
      element.innerHTML = _.join(['hello', 'world'], '-')
      return element
    })
  }
  
  getComponent().then(element => {
    document.body.appendChild(element)
  })
  