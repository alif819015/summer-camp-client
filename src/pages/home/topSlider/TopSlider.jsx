import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Container from "../../../shared/container/Container";
import { useEffect, useState } from "react";

const TopSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/topslider.json");
        const jsonData = await response.json();
        setData(jsonData);
        // console.log(jsonData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mt-10">
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
          {data.map((playear) => (
            <SwiperSlide key={playear.id}>
              <div className="card bg-base-100 shadow-xl mb-7 font-extralight">
                <figure>
                  <img className="h-80 w-full" src={playear.image} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl ">
                    Name: {playear.name}
                  </h2>
                  <p>
                    <span className="font-semibold">Description:</span>{" "}
                    {playear.description}
                  </p>
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
