import React from 'react'
import Test from 'testConcept/PureComponent'

export default class Page extends React.Component {
  state = {
    options: [1, 2, 3],
  }

  reset = () => {
    console.log('reset!')
    this.setState({
      options: null,
    })
  }

  render() {
    return (
      <div>
        {this.state.options}
        <button type="button" onClick={this.reset}>
          test if re render
        </button>
        {/* this situaction will pass new array every times cause rerender */}
        <Test options={this.state.options || []} />
      </div>
    )
  }
}
