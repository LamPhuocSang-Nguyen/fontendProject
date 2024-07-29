import React, { useContext } from 'react'
import { AppConText } from '../../AppContext'
export default function Register() {
  const {count} = useContext(AppConText);
  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  )
}
