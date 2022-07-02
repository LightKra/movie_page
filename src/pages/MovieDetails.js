import styles from './MovieDetails.module.css'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import {get} from '../utils/httpClient'
import { Spinner } from '../components/Spinner'
import {getMovieImg} from '../utils/getMovieImg'
export const MovieDetails = ()=>{
    const {movieId} = useParams();
    const [Loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    useEffect(()=>{
        setLoading(true);
        get("/movie/"+ movieId).then(data =>{
            setMovie(data);
            setLoading(false);
        })
    },[movieId]);
    if(Loading){
        return <Spinner/>
    }
    const imageUrl = getMovieImg(movie.poster_path,500);
    return (<div className={styles.detailsContainer}>
        <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
        <div className={`${styles.col} ${styles.MovieDetails}`}>
            <p className={styles.firstItem}>
                <strong>Title:</strong> {movie.title}
            </p>
            <p>
                <strong>Genres: </strong>
                {movie.genres.map( genre => genre.name).join(", ")}
            </p>
            <p>
                <strong>Description: </strong>
                {movie.overview}
            </p>
        </div>
        </div>);
}