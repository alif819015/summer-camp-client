import { useEffect, useState } from "react";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const PopularInstructors = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(
      "https://assignment-12-summer-camp-server-alif819015.vercel.app/instractore"
    )
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  return (
    <div className="mx-2 md:mx-3 lg:mx-10">
      <SectionTitle heading="Popular Instructors"></SectionTitle>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {menu.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="my-5 mx-1">
              <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="h-48 md:h-40 lg:h-48 xl:h-64 w-full object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl md:text-lg lg:text-xl xl:text-2xl">
                    {item.name}
                  </h2>
                  <p className="text-sm md:text-xs lg:text-sm xl:text-base">
                    {item.email}
                  </p>
                  <div className="card-actions flex justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularInstructors;
