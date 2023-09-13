import React from "react";
import { Col, Row } from "react-bootstrap";
import image from "../../Assets/photo.png"
import ecom from "../../Assets/ecom.png"
import shop from "../../Assets/shopinn.png"
import notes from "../../Assets/notes.png"
function Projects(){
    return(
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={image}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={ecom}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />

      
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={shop}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
       
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={notes}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
    
      </Col>

    </Row>
    );

}
export default Projects;