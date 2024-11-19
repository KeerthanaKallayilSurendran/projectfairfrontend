import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import ProfileImg from '../assets/profile.png'

const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-evenly">
        <h3 className='text-warning'>Profile</h3>
        <button onClick={() => setOpen(!open)} className="btn"><i className="fa-solid fa-chevron-down text-warning"></i></button>
      </div>
      <Collapse in={open}>
        <div className='row container-fluid align-items-center shadow justify-content-center p-2 rounded' id="example-collapse-text" style={{width:'500px'}}>
          <label className='text-center'>
            <input type="file" style={{ display: 'none' }} />
            <img height={'200px'} src={ProfileImg} alt="" />
          </label>
          <div className="mb-2 w-100">
            <input className='form-control' type="text" placeholder='User GITHUB Link' />
          </div>
          <div className="mb-2 w-100">
            <input className='form-control' type="text" placeholder='User LinkedIN Link' />
          </div>
          <button className="btn btn-warning">Upload Profile</button>
        </div>
      </Collapse>
    </>
  )
}

export default Profile