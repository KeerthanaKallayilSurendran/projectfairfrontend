import React, { useContext, useEffect, useState } from 'react'
import Add from '../Components/Add'
import Edit from '../Components/Edit'
import { userProjectAPI } from '../Service/allApi'
import Projects from '../Pages/Projects'
import { addProjectResponseContext } from '../contexts/ContextApi'
const View = () => {
  const { addProjectResponse, setAddProjectResponse } = useContext(addProjectResponseContext)
  const [userProjects, setUserProjects] = useState([])
  useEffect(() => {
    getUserProject()
  }, [addProjectResponse])

  console.log(userProjects);

  const getUserProject = async () => {
    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await userProjectAPI(reqHeader)
        if (result.status == 200) {
          setUserProjects(result.data)
        }
      } catch (error) {
        console.log(error);

      }
    }
  }
  return (
    <>
      <div className="d-flex justify-content-between">
        <h2 className='text-warning'>All Projects</h2>
        <div><Add /></div>
      </div>
      <div className="mt-2 all-project">
        {
          userProjects?.length > 0 ?
            userProjects.map(project => (
              <div key={project?._id} className="border rounded p-2 d-flex justify-content-between align-items-center mb-3">
                <h3>{project?.title}</h3>
                <div className="d-flex align-items-center">
                  <Edit project={project}/>
                  <div className="btn"><a href={project?.github} target='_blank'><i className="fa-brands fa-github fs-4"></i></a></div>
                  <button className='btn text-primary'><i className="fa-solid fa-trash fs-5"></i> </button>
                </div>
              </div>
            ))
            :
            <div className="text-danger text-2xl">Projects not uploaded</div>

        }
      </div>
    </>
  )
}

export default View