import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  return (
    <div className='error'>
        <div>Status : {error.status}</div>
        <div>{error.statusText}</div>
    </div>
  )
}

export default Error