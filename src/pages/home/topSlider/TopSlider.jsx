import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Container from "../../../shared/container/Container";
import img1 from "../../../assets/sports/football1.jpg";
import img2 from "../../../assets/sports/bascket1.jpg";
import img3 from "../../../assets/sports/cricket1.jpg";
import img4 from "../../../assets/sports/football2.jpg";
import img5 from "../../../assets/sports/bascket2.jpg";
import img6 from "../../../assets/sports/cricket2.jpg";

const TopSlider = () => {
  return (
    <div>
      <SectionTitle heading="Top Slider"></SectionTitle>
      <Container>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="card w-64 bg-base-100 shadow-xl">
              <figure>
                <img className="h-[200px] md:h-[300px] w-full" src={img1} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Lionel Messi</h2>
                <p>Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer</p>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-64 bg-base-100 shadow-xl">
              <figure>
                <img className="h-[200px] md:h-[300px] w-full" src={img2} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Kawhi Leonard</h2>
                <p>Kawhi Anthony Leonard is an American professional basketball player for the Los</p>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-64 bg-base-100 shadow-xl">
              <figure>
                <img className="h-[200px] md:h-[300px] w-full" src={img3} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shahid Afridi</h2>
                <p>Sahibzada Mohammad Shahid Khan Afridi is a captain of the Pakistan cricket team.</p>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-64 bg-base-100 shadow-xl">
              <figure>
                <img className="h-[200px] md:h-[300px] w-full" src={img4} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Cristiano Ronaldo</h2>
                <p>Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese footballer</p>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-64 bg-base-100 shadow-xl">
              <figure>
                <img className="h-[200px] md:h-[300px] w-full" src={img5} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Damian Lillard</h2>
                <p>Damian Lamonte Ollie Lillard Sr. is an American professional basketball player </p>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-64 bg-base-100 shadow-xl">
              <figure>
                <img className="h-[200px] md:h-[300px] w-full" src={img6} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shane Watson</h2>
                <p>Shane Robert Watson is an Australian former cricketer who played for and occasionally </p>
                
              </div>
            </div>
          </SwiperSlide>
          
          ...
        </Swiper>
      </Container>
    </div>
  );
};

export default TopSlider;
