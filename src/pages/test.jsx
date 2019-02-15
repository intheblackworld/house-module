import React from 'react'
import Test from 'testConcept/PureComponent'
import LazyAndSuspense from 'testConcept/MemoComponent'
import HookComponent from 'testConcept/Hook'

export default class Test extends React.Component {
  state = {
    options: [1, 2, 3],
    name: '',
  }

  resetOptions = () => {
    console.log('reset Options!')
    this.setState({
      options: null,
    })
  }

  changeNameProps = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  render() {
    return (
      <React.Fragment>
        <h3>Pure Component Test</h3>
        <button type="button" onClick={this.resetOptions}>
          test if re render
        </button>
        {/* this situaction will pass new array every times cause rerender */}
        <Test options={this.state.options || []} />
        <h3>Memo, lazy, suspense Test</h3>
        <input type="text" onChange={this.changeNameProps} defaultValue={this.state.name} />
        <LazyAndSuspense />
        <h3>Hook Test</h3>
        <HookComponent />
      </React.Fragment>
    )
  }
}
