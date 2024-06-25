import React from 'react'
import NavBar from '../organism/NavBar'
import Counts from '../molecules/Counts'
import RequestTable from '../organism/RequestsTable'
import CountsBar from '../organism/CountsBar'
import RequestForm from '../organism/RequestForm'
import { NavButtons } from '../atoms/Buttons/Buttons'

function RequestsPage() {
  return (
    <div>
        <NavBar/>
        <Counts/>
        {/* <RequestTable/> */}

    </div>
  )
}

export default RequestsPage