window.Controller = function (options) {
  let object = {
    model: null,
    view: null,
    init: function (view, model) {
      //重复的东西
      this.model = model
      this.model.init()
      this.view = view
      this.bindEvents()
      //调用init中不重复的东西
      options.init.call(this, view, model)
      this.bindEvents()
    }
  }

  //把 重复地 不重复地 拼起来
  for (let key in options) {
    if (key !== 'init') {
      object[key] = options[key]
    }
  }
  return object
}