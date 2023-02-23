import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { slider } from "./slider";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import axios from "axios";

const IMG_URL = "https://image.tmdb.org/t/p/w500";
const banner = "";

interface State {
  data: [];
}
export default class Banner extends Component {
  state = {
    data: [],
  };

  getApi() {
    axios.get(
      "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=c0cf889b8d4bcdc45ffc8742122630d5",
    ).then((res) => {
        this.setState({data : res.data.results})
    })
    .catch(err => console.log(err));
  }

  render() {
    const {data} = this.state
    return (
      <>
        <div className="flex">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="w-full h-[550px]"
          >
            {data.map((item: any) => {
              console.log();

              return (
                <SwiperSlide className="">
                  <img
                    className="image-full w-full"
                    src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </>
    );
  }
}
