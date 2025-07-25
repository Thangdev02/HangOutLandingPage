import React from "react";
import { Row, Col } from "react-bootstrap";

const ImageColumnGroup = () => {
    return (
        <Row className="align-items-center">
            {/* Text Section */}
            <Col md={6}>
                <h2 style={{ fontWeight: '600', fontSize: '56px' }}>
                   Đi đâu đó? <br/>
                    <span style={{ color: '#ff9900', fontFamily: 'Fredoka',fontSize: '74px',
                                fontWeight: 'bold',
                                textShadow: '2px 2px 3px #ff9900', marginLeft:'6%' }}> HangOut</span> lo
                   <img style={{marginBottom:'4%'}} src="/assets/images/sticker.png"/>
                </h2>
                <p style={{fontFamily: 'Poppins', marginTop: '20px', color: '#333', fontSize: '16px', lineHeight: '1.7' }}>
                    Bạn đã bao lần đau đầu khi phải tự hỏi: “Đi đâu bây giờ nhỉ?”.
                    Quán quen đã nhàm chán, bạn bè có phần khó khăn, còn mạng xã hội thì rối ren không đúng gu.
                    Vậy thì hãy để HangOut đề xuất giúp bạn chỉ trong 3 giây!
                </p>

                <h5 style={{fontFamily: 'Poppins', fontWeight: '700', marginTop: '30px',fontSize: '26px' }}>Khám phá địa điểm thú vị gần bạn</h5>
                <p style={{fontFamily: 'Poppins', fontSize: '16px', color: '#444', marginTop: '20px' }}>
                    HangOut sẽ dựa vào vị trí chính xác của bạn để gợi ngay “thứ phù hợp” một cách thông minh và tiện lợi.
                </p>
            </Col>

            {/* Image Section */}
            <Col md={6} className="text-center">
                <img
                    src="/assets/images/asset4.png"
                    alt="Cool Emoji"
                    style={{ maxWidth: '360px', height: 'auto' }}
                />
            </Col>
        </Row>
    );
};

export default ImageColumnGroup;
