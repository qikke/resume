window.onload = function () {
  siteWelcome.classList.remove('active')

  window.onscroll = function () {
    if (window.scrollY != 0) {
      topNavBar.classList.add('sticky')
    } else {
      topNavBar.classList.remove('sticky')
    }
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
      let li = event.currentTarget
      li.classList.add('active')
    }
    lis[i].onmouseout = function (event) {
      let li = event.currentTarget
      li.classList.remove('active')
    }
  }

  var aTags = document.querySelectorAll('nav.nav > ul > li > a')
  for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (event) {
      event.preventDefault()
      let a = event.currentTarget
      let href = a.getAttribute('href')
      let element = document.querySelector(href)
      window.scrollTo(0, element.offsetTop - 80)
    }


  }

}