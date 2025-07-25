import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const features = [
    {
        title: 'Lọc địa điểm nâng cao',
        icon: '/assets/images/icon1.png',
        description:
            'Tìm theo vị trí, giá, giờ mở cửa, thể loại (quán ăn, cà phê, giải trí...), và thậm chí là cả phong cách địa điểm một cách nhanh chóng và chính xác.',
        imagePosition: 'left',
        image: '/assets/images/asset5.jpg',
    },
    {
        title: 'Gợi ý thông minh bằng AI',
        icon: '/assets/images/icon2.png',
        description:
            'Không cần lướt mạng hàng giờ – HangOut đề xuất ngay địa điểm và lịch trình phù hợp với bạn. Chim nhỏ Lạc của chúng mình mê nhất là Lông Bông, chỉ quán chi có chuẩn thôi!',
        imagePosition: 'right',
        image: '/assets/images/asset6.png',
    },
    {
        title: 'Check-in nhận thưởng',
        icon: '/assets/images/icon3.png',
        description:
            'Kiếm quà mỗi lần, check-in địa điểm xịn xò để nhận điểm đổi quà và ưu đãi hàng ngày theo lộ trình bạn tạo.',
        imagePosition: 'left',
        image: '/assets/images/asset7.jpg',
    },
];

const FeatureHighlight = () => {
    return (
        <Container className="mt-5">
            <h2 className="text-center fw-bold mb-4" style={{ fontSize: '32px' }}>
                Tính năng <span style={{ color: '#ff9900' }}>nổi bật ✨</span>
            </h2>
            <hr style={{ width: '80px', borderTop: '3px solid #ff9900', margin: '0 auto 40px' }} />

            {features.map((feature, index) => (
                <Row
                    key={index}
                    className="align-items-center mb-4"
                    style={{
                        background: 'linear-gradient(to right, #FF7E15, #FF9A00)',
                        borderRadius: '20px',
                        padding: '24px',
                        color: 'white',
                        flexDirection: feature.imagePosition === 'right' ? 'row-reverse' : 'row',
                    }}
                >
                    <Col md={6}>
                        <img
                            src={feature.image}
                            alt={feature.title}
                            style={{
                                width: '80%',
                                height: '400px',
                                objectFit: 'cover',
                                borderRadius: '16px',
                            }}
                        />
                    </Col>

                    <Col
                        md={6}
                        className={`d-flex flex-column justify-content-start ${feature.imagePosition === 'right'
                                ? 'align-items-start text-start'
                                : 'align-items-end text-end'
                            }`}
                    >
                        <div
                            className={`d-flex align-items-center gap-2 mb-2 ${feature.imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse'
                                }`}
                        >
                            <img
                                style={{ width: '42px', height: '42px' }}
                                src={feature.icon}
                                alt="icon"
                            />
                            <h4
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: '40px',
                                    margin: 0,
                                    textShadow: '2px 2px 3px #EB4B18',
                                    fontFamily: 'Fredoka',
                                }}
                            >
                                {feature.title}
                            </h4>
                        </div>
                        <p
                            style={{
                                width: '500px',
                                fontSize: '16px',
                                lineHeight: '1.6',
                                fontFamily: 'Poppins',
                                textAlign: 'justify',
                                marginTop: 0,
                            }}
                        >
                            {feature.description}
                        </p>
                    </Col>



                </Row>
            ))}
        </Container>
    );
};

export default FeatureHighlight;
