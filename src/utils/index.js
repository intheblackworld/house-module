import cx from 'classnames'

/* 回傳圖片列表 */
export const imgUrls = (length, isFake, size = [300, 300]) => {
  // path, filePrefix, length,
  // compose file path example
  // 'assets/img/section4/public-n.png'
  const items = Array.from({ length }, (x, i) => i + 1)

  // if (isFake) {
  return items.map(() => `https://via.placeholder.com/${size[0]}x${size[1]}`)
  // }
  // const urls = items.map(item => require.context(`${path}/${filePrefix}-${item}`))

  // return urls
}
export const withTrans = (className, c, show) => cx(c[className], {
  [c.show]: show,
  [c.hide]: !show,
})

export const isMobile = window.navigator.userAgent.match(/iPhone/i) != null
  || window.navigator.userAgent.match(/Android/i) != null

export default null
