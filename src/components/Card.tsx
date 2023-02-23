import React, { Component } from "react";

interface Movie {
  title: string;
  overview: string;
  poster_path: string
}
const IMG_URL = "https://image.tmdb.org/t/p/w500";
export default class Card extends Component<Movie> {
  render() {

    const {title, overview, poster_path} = this.props
   
    return (
      <>
      {/* <div className="mb-10 h-auto mx-auto cursor-pointer w-full xl:w-[280px] 2xl:w-[300px] shadow-md">
        <figure>
          <img
            className="rounded-2xl hover:rounded-1xl duration-100 hover:scale-125 sm:w-[100px] md:w-[220px] xl:w-[230px] 2xl:w-[300px]"
            src={IMG_URL + poster_path}
            alt="Shoes" 
           
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-lg ">{title}</h2>
          <p className="font-sans">{overview}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch Now</button>
          </div>
        </div>
      </div> */}
      <div className=" mb-10 h-auto mx-auto cursor-pointer w-full xl:w-[280px] 2xl:w-[300px]">
                <label htmlFor="my-modal">
                  <img
                    className="rounded-2xl hover:rounded-1xl duration-100 hover:scale-125 sm:w-[100px] md:w-[220px] xl:w-[230px] 2xl:w-[300px]"
                    src={IMG_URL + poster_path}
                  />
                </label>
                <div>
                  <input
                    type="checkbox"
                    id="my-modal"
                    className="modal-toggle"
                  />
                  <div className="modal ">
                    <div className="modal-box bg-white">
                      <h3 className="font-bold text-lg ">
                      {title}
                      </h3>
                      <p className="py-4 font-medium">
                      {overview}
                      </p>
                      <div className="modal-action ">
                        <label htmlFor="my-modal" className="btn bg-amber-500">
                          Watch Now!
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </>

    );
  }
}
