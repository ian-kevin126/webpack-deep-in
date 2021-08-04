module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        'ie >= 8', // 兼容IE7以上浏览器
        'Firefox >= 3.5', // 兼容火狐版本号大于3.5浏览器
        'chrome  >= 35', // 兼容谷歌版本号大于35浏览器,
        'opera >= 11.5' // 兼容欧朋版本号大于11.5浏览器,
      ]
    },
    'postcss-pxtorem': {
      rootValue: 14, // 根元素字体大小
      // propList: ['*'] // 可以从px更改到rem的属性
      propList: ['height']
    },
    'postcss-sprites': {
      // 告诉webpack合并之后的图片保存到什么地方
      spritePath: './bundle/images',
      // 告诉webpack合并图片的时候如何分组，一个文件夹打成一张精灵图
      groupBy: function (image) {
        // url: '../images/animal/animal1.png',
        const path = image.url.substr(0, image.url.lastIndexOf('/'))
        // console.log(path, "!!!!!!");
        const name = path.substr(path.lastIndexOf('/') + 1)
        // console.log(name, "!!!!!!!!");
        return Promise.resolve(name)
      },
      // 同一格式的图片打成一张精灵图
      filterBy: function (image) {
        const path = image.url
        if (!/\.png$/.test(path)) {
          return Promise.reject()
        }
        return Promise.resolve()
      }
    }
  }
}
