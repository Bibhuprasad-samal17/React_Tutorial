import React from 'react'
import card from './components/card'
import user from './components/user'



const App = () => {

  const arr = [
    {
      username: 'john', age: 30
    },
    {
      username: 'jane', age: 25
    },
    {
      username: 'bob', age: 40
    }]


  arr.map(function (elem) {
    console.log(elem.username);
  })


  return (
    <div className='parent'>
      {arr.map(function (elem) {
        return <h1>{elem}</h1>
      })}

    </div>
  )
}

export default App
