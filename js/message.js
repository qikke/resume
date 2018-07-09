! function () {
  var model = {
    init: function () {
      var APP_ID = '3nMDIPYnts7SsgtpgLk8GL42-gzGzoHsz'
      var APP_KEY = 'JXKFqoNFmiHAHQ5m79B5rqfM'
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      })
    },
    fetch: function () {
      var query = new AV.Query('Message');
      return query.find() //return一个promise对象
    },
    save: function (name, inputValue) {
      let messageAV = AV.Object.extend('Message')
      let message = new messageAV()
      return message.save({
        name: name,
        message: inputValue
      })
    }
  }
  var view = document.querySelector('#postMessage')
  var controller = {
    model: null,
    view: null,
    showDataList: null, //showDataList节点
    init: function (view, model) {
      this.model = model
      this.model.init()
      this.view = view
      this.showDataList = document.querySelector('#showDataList') //showDataList节点
      this.bindEvents()
      this.show()
    },
    bindEvents: function () {
      this.view.onsubmit = (e) => {
        e.preventDefault()
        this.saveMessage()
      }
    },
    saveMessage: function () {
      let _this = this
      var inputValue = this.view.querySelector('input[name=content]').value
      var name = this.view.querySelector('input[name=name]').value
      this.model.save(name, inputValue).then(function (object) {
        //局部刷新
        _this.addLi(object.attributes.name, object.attributes.message)
      })
    },
    show: function () {
      let _this = this
      this.model.fetch().then(function (products) {
        var dataArray = products.map((value) => {
          return value.attributes
        })
        dataArray.forEach((value) => {
          _this.addLi(value.name, value.message)
        })
      }).catch(function (error) {
        alert(JSON.stringify(error));
      });
    },
    addLi: function (name, message) {
      let li = document.createElement('li')
      li.innerText = `${name}: ${message}`
      this.showDataList.appendChild(li)
    }
  }
  controller.init(view, model)
}()