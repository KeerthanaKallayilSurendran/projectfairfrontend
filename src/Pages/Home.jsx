import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeImg from '../assets/HomeImg.png'
import ProjectCard from '../Components/ProjectCard'
import Card from 'react-bootstrap/Card';
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import { getHomeProjectAPI } from '../Service/allApi'

const Home = () => {
  const navigate = useNavigate()
  const [homeProjects, setHomeProjects] = useState([])
  useEffect(() => {
    getAllHomeProjects()
  }, [])

  const handleProject = () => {
    if (sessionStorage.getItem("token")) {
      navigate('/projects')
    } else {
      alert("Please login to get full access to our projects")
      navigate('/login')
    }
  }

  const getAllHomeProjects = async () => {
    try {
      const result = await getHomeProjectAPI()
      if (result.status == 200) {
        setHomeProjects(result.data)
      }
    } catch (error) {

    }
  }
  // console.log(homeProjects);

  return (
    <>
      <div style={{ minHeight: "100vh" }} className="d-flex justify-content-center align-items-center rounded shadow w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: "80px" }}><i className='fa-brands fa-docker'></i> Project Fair</h1>
              <p style={{ fontSize: '20px', textAlign: 'justify' }}>One Stop Destination for all Software Development Projects. Where User can add and mange their projects. As well as access all projects available in our website.... What are you waiting for!!!</p>
              {
                sessionStorage.getItem("token") ?
                  <Link to={'/dashboard'} className='btn btn-warning'>MANGE PROJECTS</Link >
                  :
                  <Link to={'/login'} className='btn btn-warning'>STARTS TO EXPLORE</Link >
              }
            </div>
            <div className="col-lg-6">
              <img className='img-fluid' src={HomeImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <h1>Explore Your Projects</h1>
        <marquee>
          <div className="d-flex">
            {
              homeProjects?.map(project => (
                <div key={project?._id} className="me-5">
                  <ProjectCard displayData={project} />
                </div>
              ))
            }
          </div>
        </marquee>
        <button onClick={handleProject} className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECT....</button>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
        <h1>Our Testimonials</h1>
        <div className="d-flex align-items-center justify-content-evenly mt-3 w-100">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                <img height={"60px"} width={"60px"} className='rounded-circle img-fluid' src={user2} alt="" />
                <span></span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-regular fa-star text-warning"></i>
                </div>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                <img height={"60px"} width={"60px"} className='rounded-circle img-fluid' src={user1} alt="" />
                <span>Tony Stark</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-regular fa-star text-warning"></i>
                </div>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                <img height={"60px"} width={"60px"} className='rounded-circle img-fluid' src={user3} alt="" />
                <span>John Wick</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-regular fa-star text-warning"></i>
                </div>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Home