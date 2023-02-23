import React, { Component } from 'react'
import axios from 'axios';
import Card from '../components/Card';
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar } from "swiper";


interface State {
    count: number;
    data: []
    popular:[]
  }
//   const link = "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=c0cf889b8d4bcdc45ffc8742122630d5"
//   console.log(link);
  
//   const homePage =
//   "https://api.themoviedb.org/3/movie/now_playing?api_key=c0cf889b8d4bcdc45ffc8742122630d5&language=en-US&page=2"
//   console.log(homePage);
  
export default class Home extends Component<State> {
    state = {
        count: 1,
        data:[],
        popular: []
    }

    getPopular() {
        axios.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=c0cf889b8d4bcdc45ffc8742122630d5')
        .then((response) => {
            
            this.setState({ popular: response.data.results });
          })
          .catch((err) => {
            console.log("error: ", err);
          });
          
    }
    getAllPages(page: number) {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=c0cf889b8d4bcdc45ffc8742122630d5&language=en-US&page=${page.toString()}`,
          )
          .then((res) => {
            // console.log(res.data.results);
            this.setState({ data: res.data.results });
          })
          .catch((err) => {
            console.log("error: ", err);
          });
      }
      
      
      nextPage() {
        this.setState({ count: this.state.count + 1 });
        this.getAllPages(this.state.count);
      }
      previousPage() {
        this.setState({ count: this.state.count - 1 });
        this.getAllPages(this.state.count);
      }
      componentDidMount(): void {
        this.getPopular()
      }
      shouldComponentUpdate(): boolean {
        return true;
      }
  render() {
        const {data, count, popular} = this.state
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

            {popular.map((item: any) => {
                console.log();
                
              return (
                <SwiperSlide className="" >
                  <img className="image-full w-full"
                    src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
            </div>
            <div
          className={`grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 ml-4 xl:p-auto 2xl:grid-cols-5 md:p-5 lg:p-6 cursor-pointer h-auto "
          }`}
        >
          {popular.map((items: any,index) => {
            return (
              <Card
                key={index}
                title={items.title}
                poster_path={items.poster_path}
                overview={items.overview}
              />
            );
          })}
        </div>

          <div
          className={`grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 ml-4 xl:p-auto 2xl:grid-cols-5 md:p-5 lg:p-6 cursor-pointer h-auto "
          }`}
        >
          {data.map((items: any, index) => {
            return (
              <Card
                key={index}
                title={items.title}
                poster_path={items.poster_path}
                overview={items.overview}
              />
            );
          })}
        </div>

        <div className="btn-group flex justify-center">
          <button className="btn" onClick={() => this.previousPage()} >
            «
          </button>
          <button className="btn">{count}</button>
          <button className="btn" onClick={() => this.nextPage()}>
            »
          </button>
        </div>
        
     </>
    )
  }
}
