! function () {
  let view = window

  let controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents()
      //先让第一个模块上浮
      this.testBorderActive()
      //初始化轮播，暂时放在这
      var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    },
    bindEvents: function () {
      this.view.onload = () => {
        //移除加载页面
        siteWelcome.classList.remove('active')
      }
      this.view.onscroll = () => {
        //导航栏的样式变化
        if (this.view.scrollY != 0) {
          topNavBar.classList.add('sticky')
        } else {
          topNavBar.classList.remove('sticky')
        }
        this.testBorderActive()
      }
    },
    testBorderActive: function () {
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
  }
  controller.init(view)
}()
