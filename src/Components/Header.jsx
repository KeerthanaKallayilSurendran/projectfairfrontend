import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = ({insideDashboard}) => {
  return (
    <Navbar className="shadow rounded border position-fixed w-100" style={{ zIndex: 1 }}>
      <Container>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Navbar.Brand style={{ color: "white" }} className='fs-3 fw-bolder'>
            <i className='fa-brands fa-docker'></i> Project Fair
          </Navbar.Brand>
        </Link>
        {
          insideDashboard &&
          <button className='btn btn-link'>Logout <i className="fa-solid fa-right-from-bracket ms-1"></i></button>
        }
      </Container>
    </Navbar>
  )
}

export default Header