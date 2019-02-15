import React from 'react'

// React.memo is a HOC
// similar to React.PureComponent but for function components instead of classes
// memoizing the result to boost performance
// default doing the shallow compare
// Note
// if want to control over the comparison, pass the custom comparison function as the second arg.

// applicable scenarios:
// 1. function component renders the same result given the same props.
// 2. performance optimization

export const MyComponent = props => <div>{props.name}</div>

export const areEqual = (prevProps, currProps) => {
  console.log('...', prevProps, '...', currProps)
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
  if (prevProps.name === currProps.name) {
    return true
  }
  console.log('render!')
  return false
}

export const FragmentComponent = () => <React.Fragment>1</React.Fragment>


const LazyComponent = React.lazy(() => import('testConcept/PureComponent'))
const LazyAndSuspense = () => (
  <React.Fragment>
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  </React.Fragment>
)

export default LazyAndSuspense

// export default React.memo(MyComponent, areEqual)

// React API
// Fragment
// return multiple element in a render() method without creating an DOM element to encase.
// memo
// lazy
// helps reduce the bundle size to delay loading components
// that aren`t used during the "inital render"
// Suspense
// the loading component which will show if the lazy component is not yet loaded.
// forwardRef
