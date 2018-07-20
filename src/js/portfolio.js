! function () {
  let view = document.querySelectorAll('.portfolio')[0]
  let controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function () {
      this.view.querySelector('#portfolioAll').onclick = function () {
        portfolioState.className = "bar state-1"
      }
      this.view.querySelector('#portfolioHtml').onclick = function () {
        portfolioState.className = "bar state-2"
      }
      this.view.querySelector('#portfolioJs').onclick = function () {
        portfolioState.className = "bar state-3"
      }
    }
  }
  controller.init(view)
}()
