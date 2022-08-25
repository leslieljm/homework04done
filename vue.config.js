const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,   // 当保存代码时是否进行eslint检查
  transpileDependencies: true
})
