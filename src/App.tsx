import react, { Component } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Card from './components/Card';
import movie from './dummy/movie.json'
import axios from 'axios';


interface State {
  isDark: boolean;
  api: [];
}

const movieLink = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c0cf889b8d4bcdc45ffc8742122630d5'
export default class App extends Component <State>{
    state = {
      isDark: false,
      data: [],
    };

  //     getAllProduct() {
  //   axios
  //     .get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c0cf889b8d4bcdc45ffc8742122630d5`)
  //     .then((response) => {
  //       this.setState({ api: response.data });
  //       console.log("data: ", api);
        
  //     })
  //     .catch((error) => {
  //       console.log("error: ", error);
  //     });
  // }
    
    componentDidMount(): void {
      axios
      .get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c0cf889b8d4bcdc45ffc8742122630d5`)
      .then((response) => {
      console.log(response.data.results);
      this.setState({data: response.data.results})
      })
      .catch((error) => {
        console.log("error: ", error);
      });
    }
    shouldComponentUpdate(): boolean {
      return true
    }
    
    showModal = () => {
    //  if(this.state.isDark === false) {
    //   this.setState({isDark: true})
    // } else {
    //   this.setState({ isDark : false})
    // }
      this.setState({isDark: !this.state.isDark})
    };
 
    render () {
      const {isDark ,data} = this.state
      // console.log(isDark);
      
      return (
        <div className={`w-screen h-full ${isDark ? 'bg-slate-700 text-teal-400' : 'bg-white text-white'}`}>
          <Navbar handleType={() => this.showModal()}  />
            
            <div className={`grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 ml-4 xl:p-auto 2xl:grid-cols-5 md:p-5 lg:p-6 cursor-pointer h-auto ${isDark ? 'text-teal-400' : 'text-black'}`}>
            {
              data.map((items: any) => {
                return (
                  <Card 
                  key={items.id}
                  title={items.title}
                  poster_path={items.poster_path}
                  overview={items.overview}
                  isDark={isDark}
                  />
                )
              })
            }
            </div>
          </div>
    

      )
    }
}


