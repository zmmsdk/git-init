// 暴露
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 配置vant组件库
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]

}
