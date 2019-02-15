import React, { useState, useEffect } from 'react'

const Example = () => {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(18)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>You are {age} years old</p>
      <button type="button" onClick={() => setAge(age + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Example

// 在 useState 進行狀態管理
// useState = (initValue) => {
//   const fn = newState => (context[key] = newState)
//   return [initValue, fn]
// }
// useEffect run after every render. -- include first render.
// 在 useEffect 創造生命週期
