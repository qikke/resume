window.Model = function (options) {
  let resourseName = options.resourseName
  return {
    init: function () {
      var APP_ID = '3nMDIPYnts7SsgtpgLk8GL42-gzGzoHsz'
      var APP_KEY = 'JXKFqoNFmiHAHQ5m79B5rqfM'
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      })
    },
    fetch: function () {
      var query = new AV.Query(resourseName);
      return query.find() //return一个promise对象
    },
    save: function (object) {
      let messageAV = AV.Object.extend(resourseName)
      let message = new messageAV()
      return message.save(object)
    }
  }
}