module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/<test>/'  // <REPO> 是github的專案名稱
    : '/'
}