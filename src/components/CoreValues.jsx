import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CoreValues = () => {
    return (
        <Container className="my-5">
            {/* Title */}
            <div className="text-center mb-5">
                <h2 style={{
                    color: '#ff9900',
                    fontWeight: 'bold',
                    fontSize: '56px',
                    fontFamily: 'Fredoka',
                    textShadow: '1px 1px 2px rgba(255, 153, 0, 0.3)',
                    background: "linear-gradient(to right, #EB4B18, #FF6F20)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}>
                    Giá Trị Cốt Lõi  
                    <span style={{marginLeft:'1%',
                          textShadow: '1px 1px 2px rgba(255, 153, 0, 0.3)',
                          background: "linear-gradient(to right, #FF7E15, #FF9A00)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                    }}>
                        của HangOut
                    </span>
                </h2>
                <hr style={{ width: '880px', border: '1px solid #EB4B18', margin: '10px auto' }} />
            </div>

            {/* Content Cards */}
            <Row className="text-center">
                {/* Mission Card */}
                <Col md={6} className="mb-4">
                    <div style={{
                        background: 'linear-gradient(to right, #ff8c00, #ffb347)',
                        borderRadius: '12px',
                        padding: '20% 20px',
                        color: 'white',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                        <img src="/assets/images/icon4.png" alt="Mission" style={{ width: '160px', marginBottom: '20px' }} />
                        <h4 style={{
                            fontWeight: 'bold',
                            fontSize: '48px',
                            margin: 0,
                            textShadow: '2px 2px 3px #EB4B18',
                            fontFamily: 'Fredoka'
                        }}>Sứ mệnh</h4>
                        <ul style={{
                            listStyleType: 'none',
                            padding: 0,
                            marginTop: '20px',
                            fontSize: '16px',
                            fontFamily: 'Poppins',
                            textAlign: 'center'
                        }}>
                            <li>• Tiết kiệm thời gian</li>
                            <li>• Khám phá đúng chỗ, đúng gu</li>
                            <li>• Kết nối với bạn bè nhiều hơn</li>
                            <li>• Và có những kỷ niệm đáng nhớ mỗi cuối tuần</li>
                        </ul>
                    </div>
                </Col>

                {/* Vision Card */}
                <Col md={6} className="mb-4">
                    <div style={{
                        background: 'linear-gradient(to right, #ff8c00, #ffb347)',
                        borderRadius: '12px',
                        padding: '20% 20px',
                        color: 'white',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                        <img src="/assets/images/icon5.png" alt="Vision" style={{ width: '160px', marginBottom: '20px' }} />
                        <h4 style={{
                            fontWeight: 'bold',
                            fontSize: '48px',
                            margin: 0,
                            textShadow: '2px 2px 3px #EB4B18',
                            fontFamily: 'Fredoka'
                        }}>Tầm nhìn</h4>
                        <ul style={{
                            listStyleType: 'none',
                            padding: 0,
                            marginTop: '20px',
                            fontSize: '16px',
                            fontFamily: 'Poppins',
                            textAlign: 'center'
                        }}>
                            <li>• Trở thành “bản đồ vui chơi” đáng tin cậy cho mọi người</li>
                            <li>• Phủ sóng từ Hà Nội đến TP.HCM và các tỉnh thành lớn</li>
                            <li>• Đồng hành cùng người trẻ trong mọi buổi hẹn, dịp tụ họp hay chuyến đi xa</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CoreValues;
