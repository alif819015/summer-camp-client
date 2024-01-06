import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
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
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="card bg-base-100 shadow-xl mb-7">
                <figure>
                  <img
                    className="h-80 w-full"
                    src={index === 0 ? img1 : index === 1 ? img2 : index === 2 ? img3 : index === 3 ? img4 : index === 4 ? img5 : img6}
                    alt={`Image ${index + 1}`}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl">{`Player ${index + 1}`}</h2>
                  <p>{`Player ${index + 1} description goes here.`}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default TopSlider;
