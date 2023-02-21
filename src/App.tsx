import react, { Component } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Card from './components/Card';
import movie from './dummy/movie.json'


interface State {
  isDark: boolean;
}
export default class App extends Component <State>{
    state = {
      isDark: false,
    };
    showModal = () => {
      this.setState({ isDark: !this.state.isDark });
    };
    render () {
      const {isDark} = this.state
      return (
        <div className={`w-screen h-full ${isDark ? `bg-slate-700` : `bg-white`}`}>
          <Navbar handleType={() => this.setState({ isDark: true })}  />

          
            <div className='grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 ml-4 xl:p-auto 2xl:grid-cols-6 md:p-5 lg:p-6 cursor-pointer h-auto'>
            {
              movie.map((data) => {
                return (
                  <Card 
                  id={data.id}
                  title={data.title}
                  img={data.img}
                  desc={data.desc}
                  />
                )
              })
            }
            </div>
          </div>
    

      )
    }
}


