import React from 'react'

export default class Test extends React.PureComponent {
  // doesn’t implement shouldComponentUpdate()
  // but React.PureComponent implements it with a shallow prop and state comparison
  render() {
    console.log('render!')
    return (
      <div>
        {this.props.options}
      </div>
    )
  }
}
