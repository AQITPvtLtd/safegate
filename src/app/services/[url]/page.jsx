import React from 'react'
import Service from './Service'

const page = ({params}) => {
    const url = params.url;
  return (
    <div><Service url={url}/></div>
  )
}

export default page