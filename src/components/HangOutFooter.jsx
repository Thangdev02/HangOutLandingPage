import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

const HangOutFooter = () => {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #FF9A00 0%, #FF6F20 100%)',
        color: 'white',
        padding: '40px 0',
        fontFamily: 'Fredoka, sans-serif',
      }}
    >
      <Container>
        {/* Menu trung tâm */}
        <Row className="justify-content-center text-center mb-4" style={{ fontFamily: 'Fredoka',fontSize:'22px' }}>
          <Col xs="auto" className="px-3 fw-semibold">Sản phẩm</Col>
          <Col xs="auto" className="px-3 fw-semibold">Về chúng tôi</Col>
          <Col xs="auto" className="px-3 fw-semibold">Tài nguyên</Col>
          <Col xs="auto" className="px-3 fw-semibold">Điều khoản</Col>
        </Row>

        {/* Logo */}
        <Row className="justify-content-start text-center mb-4">
          <Col md="auto">
            <img src="/assets/images/logoFooter.png" alt="HangOut Logo" style={{ width: '220px' }} />
          </Col>
        </Row>

        {/* Ngôn ngữ + Mạng xã hội */}
        <Row className="mt-4">
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            {/* Ngôn ngữ */}
            <p
              className="fw-semibold mb-2"
              style={{
                fontFamily: 'Fredoka',
                textShadow: '0px 2px 4px rgba(255, 102, 0, 0.6)',
                fontSize:'20px'
              }}
            >
              Ngôn ngữ:
            </p>
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '2px 2px 6px rgba(0,0,0,0.1)',
                padding: '4px 10px',
                display: 'inline-block',
                position: 'relative',
              }}
            >
              <select
                style={{
                  appearance: 'none',
                  border: 'none',
                  fontWeight: 600,
                  width:'300px',
                  height:'45px',
                  fontFamily: 'Fredoka',
                  color: '#ff6600',
                  background: 'transparent',
                  paddingRight: '20px',
                  cursor: 'pointer',
                }}
              >
                <option>Tiếng Việt</option>
                <option>English</option>
              </select>
              {/* Mũi tên custom */}
              <span
                style={{
                  content: '""',
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  fontSize: '12px',
                  color: '#ff6600',
                }}
              >
                ▼
              </span>
            </div>

            {/* Mạng xã hội */}
            <p className="fw-semibold mt-4 mb-2" style={{ fontFamily: 'Fredoka',fontSize:'20px'
 }}>
              Theo dõi chúng tôi tại đây.
            </p>
            <div className="d-flex gap-2 mt-2">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon color="#ff6600" size={18} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
            <img src='/assets/images/FooterHas.png'/>
        </Row>
      </Container>
    </footer>
  );
};

export default HangOutFooter;
