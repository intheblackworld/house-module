import * as React from 'react'
import { render } from 'react-dom'
import Routers from 'routers'

import 'reset-css'
import 'semantic-ui-less/semantic.less'

const App = () => <Routers />

render(<App />, document.getElementById('app'))
