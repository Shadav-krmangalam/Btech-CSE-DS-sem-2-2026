import React, { useContext } from 'react'
import MyStore from './MyStore'

function Child3() {
    const {name,age} = useContext(MyStore)
  return (
    <div>
        <h1>Name : {name}</h1>
        <span>Age:{age}</span>
    </div>
  )
}

export default Child3