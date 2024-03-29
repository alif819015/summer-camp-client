import { useEffect, useState } from "react";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const PopularInstructors = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://assignment-12-summer-camp-server.vercel.app/instractore"
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch instructors. Status: ${response.status}`
          );
        }

        const data = await response.json();
        setMenu(data);
      } catch (error) {
        console.error("Error fetching instructors:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mx-2 md:mx-3 lg:mx-10">
      <SectionTitle heading="Popular Instructors"></SectionTitle>
      <Swiper
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {menu.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="my-8 md:my-10 xl:my-12 mx-1">
              <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="h-80 w-full "
                    src={item.image || "placeholder.jpg"}
                    alt={item.name}
                  />
                </figure>
                <div className="card-body font-extralight">
                  <h2 className="card-title text-lg xl:text-xl">{item.name}</h2>
                  <p className="text-sm md:text-xs lg:text-sm xl:text-base">
                    {item.email}
                  </p>
                  <div className="card-actions flex justify-end">
                    <button className="Btn">Show Details</button>
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
