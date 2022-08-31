import React from 'react'
import { getMovies, movies } from '../services/fakeMovieService'

class Movies extends React.Component {
    state = {
        movies: getMovies()
    };
    render() {
        return <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie =>(
                    
                    <tr>
                    <td >{movie.title}</td>
                    <td >{movie.genre.name}</td>
                    <td >{movie.numberInStock}</td>
                    <td >{movie.dailyRentalRate}</td>
                </tr>
                ))}
                
            </tbody>
        </table>
    }
}

export default Movies