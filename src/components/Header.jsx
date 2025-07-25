import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

const HangOutHeader = () => {
    return (
        <Navbar expand="lg" className="bg-white shadow-sm p-0">
            <Container>
                <Navbar.Brand href="/" className="fw-bold fs-3 text-dark" style={{ height: '110px' }}>
                    <img
                        src="/assets/images/Logo.png"
                        alt="Logo"
                        width="100%"
                        height="100vh"
                        style={{ objectFit: "contain" }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav className="me-auto fw-semibold" style={{ fontFamily: 'Fredoka', fontSize: '16px' }}>
                        <Nav.Link href="#explore">Khám phá</Nav.Link>
                        <Nav.Link href="#features">Tính năng</Nav.Link>
                        <Nav.Link href="#reviews">Reviews</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#faqs">FAQs</Nav.Link>
                        <Nav.Link href="#about">Về chúng tôi</Nav.Link>

                    </Nav>
                    <Button variant="warning" className="text-white px-4 py-2 rounded-3" style={{
                        width: '211px', height: '62px', fontFamily: 'Fredoka', fontSize: '32px',
                        background: "linear-gradient(90deg, #FF9A00, #FF6F20)",
                        boxShadow: '2px 2px 6px 2px #FF9A00', border: 'none'
                    }}>
                        Tải ngay
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HangOutHeader;
