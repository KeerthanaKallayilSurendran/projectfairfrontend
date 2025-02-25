import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ImgUpload from '../assets/img2.png'
import SERVER_URL from '../Service/serverUrl'

const Edit = ({ project }) => {
  const [preview, setPreview] = useState("")
  const [imageFileStatus, setImageFileStatue] = useState(false)
  const [projectDetails, setProjectDetails] = useState({
    id: project._id, title: project.title, language: project.language, overview: project.overview, github: project.github, website: project.website, projectImg: ""
  })
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (projectDetails.projectImg.type == 'image/png' || projectDetails.projectImg.type == 'image/jpeg' || projectDetails.projectImg.type == 'image/jpg') {
      setImageFileStatue(true)
      // createURL method is used to convert file type to url here URL is js class 
      setPreview(URL.createObjectURL(projectDetails.projectImg))
    } else {
      setImageFileStatue(false)
      setPreview("")
      setProjectDetails({ ...projectDetails, projectImg: "" })
    }
  }, [projectDetails.projectImg])

  const handleClose = () => {
    setShow(false);
    setProjectDetails({
      id: project._id, title: project.title, language: project.language, overview: project.overview, github: project.github, website: project.website, projectImg: ""
    })
  }
  const handleShow = () => {
    setShow(true);
    setProjectDetails({
      id: project._id, title: project.title, language: project.language, overview: project.overview, github: project.github, website: project.website, projectImg: ""
    })
  }

  const handleUpdateProject = async () => {
    const { id, title, language, overview, github, website, projectImg } = projectDetails
    if (title && language && overview && github && website) {
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("language", language)
      reqBody.append("overview", overview)
      reqBody.append("github", github)
      reqBody.append("website", website)
      preview ? reqBody.append("projectImg", projectImg) : reqBody.append("projectImg", project.projectImg)
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
        "Content- Type": "multipart / form - data",
        "Authorization": `Bearer ${token}`
      }
    }
  } else {
    alert("Please fill the form completely")
}
  }


return (
  <>
    <button onClick={handleShow} className="btn"><i className="fa-solid fa-edit fs-5"></i></button>
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false} centered size='lg'
    >
      <Modal.Header closeButton>
        <Modal.Title className='text-info fs-3'>Update Project Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <label>
              {/* in onchange we get the image file */}
              <input onChange={e => setProjectDetails({ ...projectDetails, projectImg: e.target.files[0] })} type="file" style={{ display: 'none' }} />
              <img className='img-fluid' src={preview ? preview : `${SERVER_URL}/uploads/${project.projectImg}`} alt="" />
            </label>
            {
              !imageFileStatus &&
              <div className="text-warning fw-bolder my-2">Upload Only the following file types (jpeg, jpg, png) here!!!</div>
            }
          </div>
          <div className="col-lg-8">
            <div className="mb-2">
              <input value={projectDetails.title} onChange={e => setProjectDetails({ ...projectDetails, title: e.target.value })} placeholder='Project Title' type="text" className="form-control" />
            </div>

            <div className="mb-2">
              <input value={projectDetails.language} onChange={e => setProjectDetails({ ...projectDetails, language: e.target.value })} placeholder='Languages Used in Project' type="text" className="form-control" />
            </div>

            <div className="mb-2">
              <input value={projectDetails.overview} onChange={e => setProjectDetails({ ...projectDetails, overview: e.target.value })} placeholder='Project Overview' type="text" className="form-control" />
            </div>

            <div className="mb-2">
              <input value={projectDetails.github} onChange={e => setProjectDetails({ ...projectDetails, github: e.target.value })} placeholder='Project Github Link' type="text" className="form-control" />
            </div>

            <div className="mb-2">
              <input value={projectDetails.website} onChange={e => setProjectDetails({ ...projectDetails, website: e.target.value })} placeholder='Project Website Lik' type="text" className="form-control" />
            </div>

          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleUpdateProject} variant="primary">Update</Button>
      </Modal.Footer>
    </Modal>
  </>
)
}

export default Edit