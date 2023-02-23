
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NowPlaying from "./pages/NowPlaying";
import FavMovies from "./pages/FavMovies";

interface toDark {
  isDark: boolean;
}
export default class App extends Component<toDark> {
  state = { 
    isDark: false,
  }
  
  showModal = () => {
    this.setState({ isDark: !this.state.isDark });
  };
  render() {

    const {isDark} = this.state
    return (
      <div
        className={`w-screen h-full ${
          isDark ? "bg-slate-700 text-teal-400" : "bg-white text-black"
        }`}
      >
        <BrowserRouter>
            <Navbar handleType={() => this.showModal()} />
          <Routes>
           <Route path="/" element={<Home />}></Route>
            <Route path="/detail-movies" element={<Detail />}></Route>
            <Route path="/nowplaying" element={<NowPlaying />}></Route>
            <Route path="/fav-movies" element={<FavMovies />}></Route>
          </Routes>
        </BrowserRouter>
       </div>
    );
  }
}
