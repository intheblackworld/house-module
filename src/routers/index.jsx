import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from 'components/Loading'

const Home = lazy(() => import('pages/Home'))
const Thanks = lazy(() => import('pages/Thanks'))

const Routers = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/thanks" component={Thanks} />
      </Switch>
    </Suspense>
  </Router>
)

export default Routers
