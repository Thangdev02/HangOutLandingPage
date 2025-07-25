import React from 'react';
import { Container } from 'react-bootstrap';

const testimonials = [
  {
    content:
      '“HangOut giúp mình tìm quán café yên tĩnh để học nhóm cực nhanh – tiết kiệm thời gian mà trải nghiệm lại cực ổn.”',
    author: '— Q.T, 50 tuổi',
    avatar: 'https://scontent.fsgn6-2.fna.fbcdn.net/v/t39.30808-1/492405713_2098873047231568_6324245066396873381_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_cat=102&ccb=1-7&_nc_sid=1d2534&_nc_ohc=As_tAYdqhqgQ7kNvwFtFFMB&_nc_oc=Adkt2o_hBOSZM3DTDCnoq5ozWFrq9X3TDZAC0MbTRhaveyfKDk_1-XF86IAXmQNvjdw&_nc_zt=24&_nc_ht=scontent.fsgn6-2.fna&_nc_gid=-_uuR_MFGOvQ1rXni-m5Nw&oh=00_AfTLapXVE13ap4HPVMm5eRrnetOUn8CWhJghl6wlcCUClg&oe=6888E69A',
  },
  {
    content:
      '“Mình hết sợ câu ‘Em đi đâu cũng được’ của người yêu rồi! Haha, cảm ơn HangOut rất nhiều”',
    author: '— Q.C, 23 tuổi',
    avatar: 'https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-6/482073315_1709180983314552_1166810137900936067_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=ycm1FgmR53gQ7kNvwEU1Sii&_nc_oc=Adn0eogy7YkjYPJFJ0wCpNn4uaCLJRlJwc4QMJZPor6eFlt9gqGCg2xD1YpQKkFnWJ0&_nc_zt=23&_nc_ht=scontent.fsgn6-1.fna&_nc_gid=eh5xrjb1Jx2UerhdeFtd0A&oh=00_AfQ2O_u1UzFh1LLfBP4LhlUcb5VlXf-vOUSU3692mQkSpA&oe=6888DACF',
  },
  {
    content:
      '“App rất thông minh và gọn gàng, giao diện thân thiện với người dùng mới.”',
    author: '— Q.B, 30 tuổi',
    avatar: 'https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-6/473671851_2220819965003051_118324243175354793_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=6tdU-M5yOAYQ7kNvwExvV2z&_nc_oc=AdmuSydrfj8MDsZ5gScCj_1AH49lyo0DveHgxERhynu8sib1pHf15FIjy3uBDgw1sFI&_nc_zt=23&_nc_ht=scontent.fsgn6-1.fna&_nc_gid=o0q9oGAHJi7E0UtjejwUhg&oh=00_AfQBLCs6EHe-dE4f-rvFD3Eh2ESY30tHXJgzAtJmprxABQ&oe=6888D165',
  },
  {
    content:
      '“Mỗi lần check-in là một lần háo hức, vừa đi chơi vừa có quà. Tuyệt!”',
    author: '— T.M.T, 22 tuổi',
    avatar: 'https://scontent.fsgn6-2.fna.fbcdn.net/v/t39.30808-6/475139652_1993958054445806_4331197473529594973_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zC0o-uBgkMoQ7kNvwHYYwhj&_nc_oc=AdmQYAbgsM_5LFRxyYOMH_DndSgP0aWfb5uC23SvA8M_fMt5yZLIG62_08jcMkioDEY&_nc_zt=23&_nc_ht=scontent.fsgn6-2.fna&_nc_gid=sXpZodV6WNLuy3s17oT5yg&oh=00_AfTpns-rrfVyVKEySxVAK-ESt9CFQoSysvVgMCliNUl3lw&oe=6888D807',
  },
  {
    content:
      '“Gợi ý cực kỳ chuẩn! Mỗi cuối tuần không còn đau đầu nghĩ xem đi đâu.”',
    author: '— Vinh, 23 tuổi',
    avatar: 'https://scontent.fsgn6-2.fna.fbcdn.net/v/t39.30808-6/474564394_1832548014163020_1295731926524473735_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tdwa-k_cPDAQ7kNvwFddvr1&_nc_oc=AdmkB7E-Q4TU5Lk5Xfg0HtslNSjLu7eHau04hbkpKIZeaWlRZTDiQxpNJLX7OcFQLEM&_nc_zt=23&_nc_ht=scontent.fsgn6-2.fna&_nc_gid=hwMRpKTI4rk_cBoDXNyCIw&oh=00_AfTSi8bI2iE9wuEe6TV76suQ12G34-H2hvtIp2rvk2zTHQ&oe=6888DEDD',
  },
];

const TestimonialScroll = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center fw-bold" style={{ fontSize: '32px',
         fontWeight: 'bold',
         fontSize: '56px',
         fontFamily: 'Fredoka',
        
       }}>
        Người dùng <span style={{ color: '#FF9900', textShadow: '1px 1px 2px rgba(255, 153, 0, 0.3)',
         background: "linear-gradient(to right, #EB4B18, #FF6F20)",
         WebkitBackgroundClip: "text",
         WebkitTextFillColor: "transparent", }}>Cảm nhận</span>
      </h2>
      <hr
        style={{
          width: '80px',
          borderTop: '3px solid #ff9900',
          margin: '16px auto 32px',
        }}
      />

      <div
        className="testimonial-scroll-container"
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          gap: '16px',
          paddingBottom: '8px',
        }}
      >
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="testimonial-card"
            style={{
              flex: '0 0 calc(33.3333% - 10.66px)', // 3 items per row
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              scrollSnapAlign: 'start',
            }}
          >
            <img
              src={item.avatar}
              alt="avatar"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                marginBottom: '12px',
                objectFit: 'cover',
              }}
            />
            <p style={{ fontSize: '16px', fontStyle: 'italic' }}>{item.content}</p>
            <p style={{ fontWeight: 'bold', marginTop: '16px' }}>{item.author}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TestimonialScroll;
