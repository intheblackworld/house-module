#### Folder Structure
```bash
- src
	- assets
		- img
		- font
		- svg
		- rwd.scss (斷點 example)
		- plugin.css (引入第三方套件的樣式)
  - projects (專案留存，保留組件用)
  - layouts
		- Master (主視覺)
		- ContactSection （預約賞屋/聯絡資訊/GoogleMap/建案資訊，等四個組件的區塊，基本上不會大改風格)
      - ThreeFa/Section1...x (三發專案各區塊)
		- index.jsx (將各區塊組合)
	
  - pages
		- Home.jsx
		- Thanks.jsx (感謝頁)
	- components
		- Navigation (頁首)
    	- Footer (頁尾)
		- Loading.jsx
		- Carousel (輪播組件)
		- HorizontalTimeline （水平滾動時間軸組件）
		- Section (for 沒有滿版的區塊)
		- FullScreen (for 滿版的區塊)
		- ViewPort (偵測組件是否進入視區的組件)
      - GoogleMap (Google map js API 組件，可調整樣式)
		- 專案名稱下會有 sections 用來保留組合成 layouts 用
  

  - public (semantic custom theme variable)
  - utils
		- index.js
  - plugins
  
```

### TODO
- [x] webpack
	- [x] dev, prd split
- [x] ESLint
- [ ] env
- [x] Add React hook
- [x] Memo
- [ ] RXJS
- [x] react-router
- [x] PureComponent
- [x] webpack
- [ ] SSR
- [x] Scss
- [ ] CSS module
- [x] Webpack
- [x] React-loading
- [x] react-semantic UI
- [ ] React-ga
- [ ] react-gtm-module
- [ ] react-parallax
- [ ] react-content-loader
- [ ] fetch
- [x] Babel
- [ ] React-motion
- [ ] React-i18n
- [x] ESLint + hook
- [x] semantic custom theme
- [x] carousel (nukaCarousel)
- [x] viewport fade in (react-in-viewport and make a HOC component)
- [ ] react-scroll
- [ ] modal
- [ ] html-loader
- [ ] animate.css
- [ ] react-scrollmagic
- [ ] react-gsap
- [ ] svg-animation