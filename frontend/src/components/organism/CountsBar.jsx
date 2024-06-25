import React from 'react'
import Counts from '../molecules/Counts'
import RequestForm from './RequestForm'

function CountsBar() {
  return (
    <div className=' h-auto'>
        <div>
            <RequestForm/>
        </div>
        <div>
            <Counts/>
        </div>
    </div>
  )
}

export default CountsBar