window.onload = function () {
  siteWelcome.classList.remove('active')

  //先让第一个模块上浮
  testBorderActive()

  function testBorderActive() {
    //导航栏的高亮变化
    //先拿到所有section
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 0; i < specialTags.length; i++) {
      let minValue = Math.abs(window.scrollY - specialTags[minIndex].offsetTop)
      let newValue = Math.abs(window.scrollY - specialTags[i].offsetTop)
      newValue < minValue && (minIndex = i)
    }

    let subMenu = document.querySelectorAll('.nav>ul>li')
    for (let i = 0; i < subMenu.length; i++) {
      subMenu[i].classList.remove('highLight')
    }
    subMenu[minIndex].classList.add('highLight')
    specialTags[minIndex].classList.add("offset")
  }

  window.onscroll = function () {
    //导航栏的样式变化
    if (window.scrollY != 0) {
      topNavBar.classList.add('sticky')
    } else {
      topNavBar.classList.remove('sticky')
    }
    testBorderActive()
  }

  portfolioAll.onclick = function () {
    portfolioState.className = "bar state-1"
  }
  portfolioHtml.onclick = function () {
    portfolioState.className = "bar state-2"
  }
  portfolioJs.onclick = function () {
    portfolioState.className = "bar state-3"
  }

  //获取到有submenu的li节点
  var lis = document.getElementById("nav").getElementsByTagName("li")
  for (var i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function (event) {
      for (let i = 0; i < lis.length; i++) {
        lis[i].classList.remove('highLight')
      }
      let li = event.currentTarget
      li.classList.add('active')
    }
    lis[i].onmouseout = function (event) {
      let li = event.currentTarget
      li.classList.remove('active')
    }
  }

  // Setup the animation loop.
  function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  requestAnimationFrame(animate);

  var aTags = document.querySelectorAll('nav.nav > ul > li > a')
  for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (event) {
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