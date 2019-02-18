/* 回傳圖片列表 */
export const imgUrls = (path, filePrefix, length, isFake, size = [300, 300]) => {
  // compose file path example
  // 'assets/img/section4/public-n.png'
  const items = Array.from({ length }, (x, i) => i + 1)

  if (isFake) {
    return items.map(() => `https://via.placeholder.com/${size[0]}x${size[1]}`)
  }
  const urls = items.map(item => require.context(`${path}/${filePrefix}-${item}`))

  return urls
}
export default null
