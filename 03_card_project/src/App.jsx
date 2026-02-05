import React from 'react'
import card from './components/card'
import user from './components/user'

const arr = [10,20,30,40]

const App = () => {
  return (
    <div className='parent'>
     {arr.map(function(elem){
      return  <h1>{elem}</h1>
     })}
      
    </div>
  )
}

export default App
