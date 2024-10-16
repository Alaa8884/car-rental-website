import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../../styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="nav-top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header-top-left d-flex align-items-center gap-3">
                <span>Need Help?</span>
                <span className="header-top-help">
                  <i className="ri-phone-fill"></i>
                  <Link to="tel:+201006541237" className=" mx-2">
                    Call:+201006541237
                  </Link>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className=" d-flex justify-content-end">
              <div className="header-top-right d-flex align-items-center gap-3">
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i>Login
                </Link>
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="nav-mid ">
        <Container>
          <Row>
            <Col lg="3" md="3" sm="4">
              <h1 className="company-logo">
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i className="ri-car-line"></i>
                  <span>
                    Rent Car <br />
                    Service
                  </span>
                </Link>
              </h1>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="company-info company-location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <div className="company-location-content">
                  <h4>Egypt</h4>
                  <h6>Cairo City, Maadi</h6>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="company-info company-work-time d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="company-work-time-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 11pm</h6>
                </div>
              </div>
            </Col>
            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end"
            >
              <button className="header-btn">
                <Link to="/contact">
                  <i className="ri-phone-fill"></i>
                  <span>Request a call</span>
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}

export default Header;
