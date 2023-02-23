import React, { Component } from 'react'
import axios from 'axios';
import Card from '../components/Card';

const api = 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=c0cf889b8d4bcdc45ffc8742122630d5&language=en-US'
console.log();

interface detailState{
    data:[]
}
const link = 'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc?api_key=c0cf889b8d4bcdc45ffc8742122630d5'
export default class Detail extends Component<detailState> {
    state = {
        data:[]
    }
    getApi() {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c0cf889b8d4bcdc45ffc8742122630d5&language=en-US&page=5')
        .then((res) => {
            console.log(res.data.results);
            
            this.setState({data: res.data.results})
            
        })
    }
  
    componentDidMount(): void {
        this.getApi()
    }
    render() {
        const {data} = this.state
    return (
        <div
        className={`grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 ml-4 xl:p-auto 2xl:grid-cols-5 md:p-5 lg:p-6 cursor-pointer h-auto "
        }`}
      >
        {data.map((items: any) => {
          return (
            <Card
              key={items.id}
              title={items.title}
              poster_path={items.poster_path}
              overview={items.overview}
            />
          );
        })}
      </div>
    )
  }
}
