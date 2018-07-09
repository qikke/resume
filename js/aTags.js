! function () {
  let view = document.querySelectorAll('nav.nav > ul > li > a')
  let controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents()
      window.requestAnimationFrame(this.animate)
    },
    animate: function (time) {
      window.requestAnimationFrame(controller.animate)
      TWEEN.update(time)
    },
    bindEvents: function () {
      for (let i = 0; i < this.view.length; i++) {
        this.view[i].onclick = function (event) {
          event.preventDefault()
          let a = event.currentTarget
          let href = a.getAttribute('href')
          let element = document.querySelector(href)
          let targetTop = element.offsetTop - 80
          let currentTop = window.scrollY
          var coords = {
            y: currentTop
          }; // Start at (0, 0)
          var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({
              y: targetTop
            }, 500) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
            .onUpdate(function () { // Called after tween.js updates 'coords'.
              // Move 'box' to the position described by 'coords' with a CSS translation.
              // box.style.setProperty('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)');
              window.scrollTo(0, coords.y)
            })
            .start(); // Start the tween immediately.
        }
      }
    }
  }
  controller.init(view)
}()