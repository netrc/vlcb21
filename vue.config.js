module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
 devServer: {
    disableHostCheck: true,   // That solved it
 }
}
