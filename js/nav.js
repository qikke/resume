! function () {
  let view = document.getElementById("nav").getElementsByTagName("li")
  let controller = {
    view: null,
    init: function () {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function () {
      for (let i = 0; i < this.view.length; i++) {
        this.view[i].onmouseover = (event) => {
          for (let j = 0; j < this.view.length; j++) {
            this.view[j].classList.remove('highLight')
          }
          let li = event.currentTarget
          li.classList.add('active')
        }
        this.view[i].onmouseout = (event) => {
          let li = event.currentTarget
          li.classList.remove('active')
        }
      }
    }
  }
  controller.init(view)
}()