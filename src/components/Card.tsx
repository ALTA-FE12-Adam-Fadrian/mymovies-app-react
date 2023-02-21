import React, { Component } from "react";

interface Movie {
  id: string;
  title: string;
  desc: string;
  img: string
}

export default class Card extends Component<Movie> {
  render() {

    const {id, title, desc, img} = this.props
    return (
      <div id={id} className="mb-10 h-auto mx-auto cursor-pointer w-full xl:w-[280px] 2xl:w-[300px] shadow-md">
        <figure>
          <img
            className="rounded-2xl hover:rounded-1xl duration-100 hover:scale-125 sm:w-[100px] md:w-[220px] xl:w-[230px] 2xl:w-[300px]"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-lg text-teal-400">{title}</h2>
          <p className="text-teal-400">{desc}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch Now</button>
          </div>
        </div>
      </div>
    );
  }
}
