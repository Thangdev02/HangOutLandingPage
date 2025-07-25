import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const PricingPlans = () => {
  return (
    <Container className="my-5">
      {/* Title */}
      <div className="text-center mb-5">
        <h2
          style={{
            color: "#EB4B18",
            fontWeight: "700",
            fontSize: "56px",
            fontFamily: "Fredoka",
            textShadow: "2px 2px 4px rgb(235, 119, 24)",
          }}
        >
          Gói dịch vụ & Bảng giá
        </h2>
        <div
          style={{
            width: "897px",
            height: "4px",
            backgroundColor: "#ff6600",
            margin: "10px auto",
            borderRadius: "2px",
          }}
        />
      </div>

      <Row className="text-center g-4">
        {/* Free Plan */}
        <Col md={4} className="h-100 d-flex flex-column">
          <div
            style={{
              background: "#f8f8f8",
              borderRadius: "16px",
              padding: "30px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              fontFamily: "Poppins",
            }}
            className="d-flex flex-column justify-content-between h-100"
          >
            <div>
              <h5
                style={{
                  fontWeight: "700",
                  fontSize: "26px",
                  fontFamily: "Fredoka",
                  background: "linear-gradient(to right, #ff7c00, #ffa500)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                  position: "relative",
                }}
              >
                Gói miễn phí
                <span
                  style={{
                    display: "block",
                    height: "2px",
                    background: "linear-gradient(to right, #ff7c00, #ffa500)",
                    width: "80%",
                    margin: "6% auto 0",
                    borderRadius: "2px",
                  }}
                ></span>
              </h5>

              <p
                style={{
                  fontFamily: "Fredoka",
                  color: "#FF6F20",
                  fontSize: "20px",
                  fontWeight: "500",
                  marginTop: "6%",
                }}
              >
                Ai cũng dùng được
              </p>
              <ul
                style={{
                  textAlign: "left",
                  fontSize: "15px",
                  listStyleType: "none",
                  lineHeight: "2",
                  padding: "6% 0",
                }}
              >
                <li>✅ Tìm kiếm địa điểm</li>
                <li>✅ Xem review, ảnh thực tế</li>
                <li>✅ Tạo danh sách yêu thích</li>
                <li>❌ Không ưu tiên đặt bàn</li>
                <li>❌ Có quảng cáo</li>
                <li>❌ Không có ưu đãi độc quyền</li>
              </ul>
            </div>

            <h5
              style={{
                fontWeight: "700",
                fontSize: "26px",
                fontFamily: "Fredoka",
                background: "linear-gradient(to right, #ff7c00, #ffa500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Miễn phí
            </h5>
          </div>
        </Col>

        {/* Premium Plan */}
        <Col md={4} className="h-100 d-flex flex-column">
          <div
            style={{
              background: "linear-gradient(to right, #ff8c00, #ffb347)",
              borderRadius: "16px",
              padding: "30px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
              color: "#fff",
              fontFamily: "Poppins",
            }}
            className="d-flex flex-column justify-content-between h-100"
          >
            <div>
              <div style={{ textAlign: "center", marginBottom: "10px" }}>
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "32px",
                    fontFamily: "Fredoka",
                    marginBottom: "8px",
                    textShadow: "2px 2px 4px #EB4B18",
                  }}
                >
                  HANGOUT PREMIUM
                </h5>
                <span
                  style={{
                    display: "block",
                    height: "2px",
                    background: "white",
                    width: "40%",
                    margin: "6px auto 0",
                    borderRadius: "2px",
                  }}
                ></span>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    marginTop: "6%",
                  }}
                >
                  Trải nghiệm{" "}
                  <b>
                    <span
                      style={{
                        textShadow: "2px 2px 4px #EB4B18",
                        fontFamily: "Fredoka",
                        fontSize: "24px",
                      }}
                    >
                      "đã"
                    </span>
                  </b>{" "}
                  hơn
                </p>
              </div>

              <ul
                style={{
                  textAlign: "left",
                  fontSize: "15px",
                  listStyleType: "none",
                  padding: 0,
                  lineHeight: "2",
                }}
              >
                <li>✔ Không quảng cáo – trải nghiệm mượt hơn</li>
                <li>✔ Đề xuất địa điểm cá nhân hóa hơn</li>
                <li>✔ Đặt bàn ưu tiên tại các quán hot</li>
                <li>✔ Nhận ưu đãi riêng (giảm giá, tặng món...)</li>
                <li>✔ Tích điểm nhanh hơn – đổi quà sớm hơn</li>
              </ul>

              <p
                style={{
                  marginTop: "20px",
                  fontWeight: "500",
                  fontSize: "15px",
                }}
              >
                Chỉ từ <strong>29.000đ/tháng</strong>
              </p>
            </div>

            <div className="text-center mt-3">
              <Button
                style={{
                  backgroundColor: "#fff",
                  color: "#ff6600",
                  border: "none",
                  fontWeight: "700",
                  width: "241px",
                  height: "58px",
                  borderRadius: "8px",
                  fontSize: "28px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                  fontFamily: "Fredoka",
                }}
              >
                Đăng kí ngay
              </Button>
            </div>
          </div>
        </Col>

        {/* Business Plan */}
        <Col md={4} className="h-100 d-flex flex-column">
          <div
            style={{
              background: "#f8f8f8",
              borderRadius: "16px",
              padding: "30px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              fontFamily: "Poppins",
            }}
            className="d-flex flex-column justify-content-between h-100"
          >
            <div>
              <h5
                style={{
                  fontWeight: "700",
                  fontSize: "26px",
                  fontFamily: "Fredoka",
                  background: "linear-gradient(to right, #ff7c00, #ffa500)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                  position: "relative",
                }}
              >
                Gói dành cho <br /> doanh nghiệp
                <span
                  style={{
                    display: "block",
                    height: "2px",
                    background: "linear-gradient(to right, #ff7c00, #ffa500)",
                    width: "100%",
                    marginTop: "6%",
                    borderRadius: "2px",
                  }}
                ></span>
              </h5>

              <ul
                style={{
                  textAlign: "left",
                  fontSize: "15px",
                  listStyle: "none",
                  padding: 0,
                  lineHeight: "2",
                  marginTop: "6%",
                }}
              >
                <li>Đưa quán của bạn lên top tìm kiếm</li>
                <li>
                  Tạo chương trình khuyến mãi, voucher riêng cho người dùng
                </li>
                <li>Quản lý đánh giá, booking, tương tác khách hàng</li>
                <li>Phân tích dữ liệu hành vi người dùng</li>
              </ul>
            </div>

            <div className="text-center mt-3">
              <Button
                style={{
                  backgroundColor: "#ff4d00",
                  color: "#fff",
                  border: "none",
                  fontWeight: "700",
                  padding: "10px 24px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                Liên hệ ngay
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PricingPlans;
