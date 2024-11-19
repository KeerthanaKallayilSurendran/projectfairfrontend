import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { allProjectAPI } from '../Service/allApi'
const Projects = () => {
  const [searchKey, setSearchKey] = useState("")
  const [allProjects, setAllProjects] = useState([])
  useEffect(() => {
    getAllProjects()
  }, [searchKey])
  const getAllProjects = async () => {
    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await allProjectAPI(searchKey, reqHeader)
        if (result.status == 200) {
          setAllProjects(result.data)
        }
      } catch (error) {
        console.log(error);

      }
    }
  }
  console.log(allProjects);

  return (
    <>
      <Header />
      <div style={{ paddingTop: '150px' }} className="container-fluid">
        <div className="d-flex justify-content-between mb-2">
          <h1>All Project</h1>
          <input onChange={e => setSearchKey(e.target.value)} type="text" placeholder='Serach your Project by language' className='form-control w-25' />
        </div>
        <Row>
          {
            allProjects?.length > 0 ?
              allProjects.map(project => (
                <Col className='mb-3' sm={12} md={6} lg={4}>
                  <ProjectCard displayData={project} />
                </Col>
              ))
              :

              <div className="text-daner text-2xl">
                Project not Found
              </div>
          }
        </Row>
      </div>
    </>
  )
}

export default Projects