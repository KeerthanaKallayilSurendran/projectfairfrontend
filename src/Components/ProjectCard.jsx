import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import SERVER_URL from '../Service/serverUrl';
const ProjectCard = ({ displayData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card onClick={handleShow} className='btn shadow'>
        <Card.Img height={'250px'} variant="top" src={`${SERVER_URL}/uploads/${displayData?.projectImg}`} />
        <Card.Body>
          <Card.Title>{displayData?.title}</Card.Title>
        </Card.Body>
      </Card>

      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-info fs-2'>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src={`${SERVER_URL}/uploads/${displayData?.projectImg}`} alt="" />
            </div>
            <div className="col-lg-6">
              <h3>{displayData?.title}</h3>
              <h6>Languages Used: <span className='text-warning'>{displayData?.language}</span></h6>
              <p style={{ textAlign: 'justify' }}><span className='fw-bolder'>Project Overview: </span>{displayData?.overview}</p>
            </div>
          </div>
          <div className='mt-3 float-start'>
            <a href={displayData?.github} className='btn btn-secondary me-2' target='_blank'><i className="fa-brands fa-github fs-5"></i></a>
            <a href={displayData?.website} className='btn btn-secondary' target='_blank'><i className="fa-solid fa-link fs-5"></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard