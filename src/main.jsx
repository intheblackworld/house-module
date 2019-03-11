import '@babel/polyfill'
import 'core-js'
import 'console-polyfill'
import 'es6-shim'

import * as React from 'react'
import { render } from 'react-dom'
import Routers from 'routers'

import 'reset-css'
import 'semantic-ui-less/semantic.less'
import 'assets/plugin.css'

const App = () => <Routers />

render(<App />, document.getElementById('app'))
