! function () {
  var model = Model({
    resourseName: 'Message'
  })
  var view = View('#postMessage')

  var controller = Controller({
    init: function (view, model) {
      this.showDataList = document.querySelector('#showDataList') //showDataList节点
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
      this.model.save({
        name: name,
        message: inputValue
      }).then(function (object) {
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
  })
  // var controller = {
  //   model: null,
  //   view: null,
  //   init: function (view, model) {
  //     this.model = model
  //     this.model.init()
  //     this.view = view
  //     this.showDataList = document.querySelector('#showDataList') //showDataList节点
  //     this.bindEvents()
  //     this.show()
  //   },
  //   bindEvents: function () {
  //     this.view.onsubmit = (e) => {
  //       e.preventDefault()
  //       this.saveMessage()
  //     }
  //   },
  //   saveMessage: function () {
  //     let _this = this
  //     var inputValue = this.view.querySelector('input[name=content]').value
  //     var name = this.view.querySelector('input[name=name]').value
  //     this.model.save({
  //       name: name,
  //       message: inputValue
  //     }).then(function (object) {
  //       //局部刷新
  //       _this.addLi(object.attributes.name, object.attributes.message)
  //     })
  //   },
  //   show: function () {
  //     let _this = this
  //     this.model.fetch().then(function (products) {
  //       var dataArray = products.map((value) => {
  //         return value.attributes
  //       })
  //       dataArray.forEach((value) => {
  //         _this.addLi(value.name, value.message)
  //       })
  //     }).catch(function (error) {
  //       alert(JSON.stringify(error));
  //     });
  //   },
  //   addLi: function (name, message) {
  //     let li = document.createElement('li')
  //     li.innerText = `${name}: ${message}`
  //     this.showDataList.appendChild(li)
  //   }
  // }
  controller.init(view, model)
}()