import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import View from '../Components/View'
import Profile from '../Components/Profile'
const Dashboard = () => {
  const [username, setUsername] = useState("")
  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setUsername(JSON.parse(sessionStorage.getItem("user")).username.split(" ")[0])
    } else {
      setUsername("")
    }
  }, [])
  return (
    <>
      <Header insideDashboard={true} />
      <div className='container-fluid' style={{ paddingTop: '100px' }}>
        <div className="row mt-3">
          <div className="col-lg-8 pe-5">
            <h1>Welcome <span className='text-warning'>{username},</span></h1>
            <View />
          </div>
          <div className="col-lg-4">
            <Profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard