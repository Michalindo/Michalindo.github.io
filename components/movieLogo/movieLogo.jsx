import ReactDOM from 'react-dom'
import React, {Component} from 'react'
import './movieLogo.scss'



class MovieLogo extends Component {
    render() {
        return(
            <div className = "database-logo">
                <img src="images/logopng.png"/>
            </div>
        )
    }
}

export default MovieLogo