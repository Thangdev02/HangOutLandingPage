import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ImageColumnGroup from "../components/ImageColumnGroup";
import FeatureHighlight from "../components/FeatureHighlight";
import TestimonialScroll from "../components/TestimonialScroll";
import CoreValues from "../components/CoreValues";
import PricingPlans from "../components/PricingPlans";
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        const sr = ScrollReveal({
          distance: '40px',
          duration: 1200,
          easing: 'ease-in-out',
          origin: 'bottom',
          reset: false, // set true nếu bạn muốn hiệu ứng lặp lại mỗi lần scroll
        });
      
        sr.reveal('.reveal-left', { origin: 'left' });
        sr.reveal('.reveal-right', { origin: 'right' });
        sr.reveal('.reveal-bottom', { origin: 'bottom' });
      }, []);
      
    return (
        <>
            <Container className="mt-5 pt-5">
                <Row className="align-items-center">
                    <Col md={6} className="reveal-left">
                        <h1 className="fw-bold mb-3 " style={{ fontSize: '54px', fontFamily: 'Poppins-Semi' }}>
                            Ứng dụng
                            <br />
                            <span style={{
                                color: '#ff9900',
                                fontWeight: 'bold',
                                textShadow: '2px 2px 3px #ff9900',
                                fontSize: '64px',
                                fontFamily: 'Fredoka'

                            }}>
                                tiên phong
                            </span>
                            <br />
                            <span style={{ fontSize: '48px', fontFamily: 'Poppins-Semi' }}>
                                đề xuất địa điểm giải trí
                            </span>
                        </h1>
                        <p className="text-muted semi-text" style={{ fontFamily: 'Poppins-Semi', fontSize: '14px' }}>
                            HangOut là ứng dụng đề xuất địa điểm vui chơi tiên phong tại Việt Nam.
                            Thoải mái khám phá mọi địa điểm ăn uống, vui chơi, giải trí phù hợp ngay gần bạn chỉ trong vài giây.
                            Chỉ cần hoàn thành sở thích để hệ thống đề xuất theo sở thích, ngân sách, thời gian và vị trí của bạn.
                            Dễ dàng chia sẻ với bạn bè và đánh giá địa điểm một cách đúng tầm nhất.
                        </p>
                        <span style={{
                            textShadow: '1px 1px 2px #EB4B18',
                            fontSize: '20px', fontFamily: 'Fredoka', color: '#EB4B18'
                        }}>
                            Tải app tại:
                        </span>
                        <div className="d-flex gap-3 mt-4">
                            <a style={{ textDecoration: 'none' }} href="https://play.google.com/store/apps/details?id=com.winnertech.hangout_app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                                <div
                                    style={{
                                        background: "linear-gradient(90deg, #FF6F20, #FF9A00)",
                                        borderRadius: "12px",
                                        padding: "8px 16px",
                                        display: "flex",
                                        alignItems: "center",
                                        minWidth: "180px",
                                        color: "white",
                                        fontWeight: "bold",
                                        boxShadow: '2px 2px 6px 1px #FF9A00', border: 'none'
                                    }}
                                >
                                    <img src="https://freelogopng.com/images/all_img/1664285914google-play-logo-png.png" alt="Google Play" height="30" className="me-2" />
                                    <div>
                                        <div style={{ fontSize: "10px", fontWeight: "500" }}>TẢI NGAY TRÊN</div>
                                        <div style={{ fontSize: "16px" }}>Google Play</div>
                                    </div>
                                </div>
                            </a>

                            <a style={{ textDecoration: 'none' }} href="https://apps.apple.com/vn/app/hangout/id6747320890?l=vi" target="_blank" rel="noopener noreferrer">
                                <div
                                    style={{
                                        background: "linear-gradient(90deg, #FF6F20, #FF9A00)",
                                        borderRadius: "12px",
                                        padding: "8px 16px",
                                        display: "flex",
                                        alignItems: "center",
                                        minWidth: "180px",
                                        color: "white",
                                        fontWeight: "bold",
                                        boxShadow: '2px 2px 6px 1px #FF9A00', border: 'none'

                                    }}
                                >
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/1024px-App_Store_%28iOS%29.svg.png" alt="App Store" height="30" className="me-2" />
                                    <div>
                                        <div style={{ fontSize: "10px", fontWeight: "500" }}>TẢI NGAY TRÊN</div>
                                        <div style={{ fontSize: "16px" }}>App Store</div>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </Col>
                    <Col md={6} className="text-center reveal-right reveal-right">
                        <div className="d-flex justify-content-center align-items-start gap-3">
                            {['asset1.jpg', 'asset2.jpg', 'asset3.jpg'].map((img, index) => (
                                <div
                                    key={index}
                                    style={{
                                        width: '140px',
                                        height: '360px',
                                        borderRadius: '999px',
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                                        marginTop: index === 1 ? '40px' : '0', // 👈 Hình giữa lệch xuống
                                    }}
                                >
                                    <img
                                        src={`/assets/images/${img}`}
                                        alt={`Visual ${index + 1}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
                <div id="explore" className="reveal-bottom" style={{ marginTop: '18%' }}>
                    <ImageColumnGroup />
                </div>
                <div id="features" className="reveal-bottom" style={{ marginTop: '18%' }}>
                    <FeatureHighlight />
                </div>
                <div id="reviews" className="reveal-left" style={{ marginTop: '18%' }}>
                    <TestimonialScroll />
                </div>
                <div id="blog" className="reveal-bottom" style={{ marginTop: '18%' }}>
                    <CoreValues />
                </div>
                <div id="faqs" className="reveal-right" style={{ marginTop: '18%' }}>
                    <PricingPlans />
                </div>
                <div id="about" className="reveal-bottom" style={{ marginTop: '18%' }}>
                    {/* Giới thiệu hoặc nội dung "Về chúng tôi" */}
                </div>

            </Container>
        </>
    );
};

export default Home;
