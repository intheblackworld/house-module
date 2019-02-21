import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from 'components/Loading'

const Home = lazy(() => import('pages/Home'))
const PhoneThanks = lazy(() => import('pages/PhoneThanks'))
const FormThanks = lazy(() => import('pages/FormThanks'))

const Routers = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/phoneThanks" component={PhoneThanks} />
        <Route exact path="/formThanks" component={FormThanks} />
      </Switch>
    </Suspense>
  </Router>
)

export default Routers
