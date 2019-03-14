import * as React from 'react'
import { render } from 'react-dom'
import Routers from 'routers'
import 'url-search-params-polyfill'

import 'reset-css'
import 'semantic-ui-less/semantic.less'
import 'assets/plugin.css'

const App = () => <Routers />

render(<App />, document.getElementById('app'))
