import React, { useContext, useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Recommend from './Recommend';
import PropTypes from 'prop-types';
import { FavoriteContext } from '../context/FavoriteContext';
import Loading from './Loading';
import tmdb from '../api/tmdbApi'
import apiConfig from '../api/apiConfig'
import Modal from './Modal';

SingleMovie.propTypes = {
    id: PropTypes.string,
}

SingleMovie.defaultProps = {
    id: '',
}

function SingleMovie(props) {
    const { toggleFavorite, favorites } = useContext(FavoriteContext)

    const { id } = props
    const [movie, setMovie] = useState({})
    const [recommends, setRecommend] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [video, setVideo] = useState()
    const [activeVideo, setActiveVideo] = useState(false)
    let check = favorites.find(favorite => favorite === movie.id)

    // const API_MOVIES = `https://api.themoviedb.org/3/movie/${id}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`
    // const IMG_PATH = "https://image.tmdb.org/t/p/w300";
    // const API_RECOMMEND = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1`

    useEffect(() => {
        const getMovie = async () => {
            try {
                const params = {}
                const response = await tmdb.detail(id, { params })
                setMovie(response)
                setIsLoading(false)
            } catch (error) {
                console.log(error.massage)
            }
        }
        getMovie()
    }, [id])

    useEffect(() => {
        const getRecommends = async () => {
            try {
                const response = await tmdb.getRecommendations(id)
                setRecommend(response.results)
            } catch (error) {
                console.log(error.massage)
            }
        }
        getRecommends()
    }, [id])

    useEffect(() => {
        const getVideo = async () => {
            try {
                const response = await tmdb.getVideos(id)
                setVideo(response.results[0])
            } catch (error) {
                console.log(error.massage)
            }
        }
        getVideo()
    }, [id])

    const handleToggleVideo = active => {
        setActiveVideo(!activeVideo)
    }

    return (
        <div className="detail-page row">
            {
                isLoading ?
                    <Loading /> :
                    (<div className="detail-container">
                        <div className="detail-before" style={{ backgroundImage: `url(${apiConfig.w1920Image(movie.backdrop_path)})` }}>
                            <div className="detail">
                                <div className="detail__img">
                                    <img src={apiConfig.w300Image(movie.poster_path)} alt={movie.title} />
                                </div>
                                <div className="detail__content">
                                    <div className="detail__content-name color-white">
                                        <h3>{movie.title}</h3>
                                        <p>{movie.release_date}</p>
                                    </div>
                                    <div className="detail__content-summary">
                                        <div className="detail__content-summary-top">
                                            <div className="detail__content-summary-top-left">
                                                <CircularProgressbar
                                                    value={movie.vote_average}
                                                    maxValue={10}
                                                    text={movie.vote_average + '/10'}
                                                    styles={{
                                                        path: {
                                                            stroke: `${movie.vote_average >= 7.5 ? '#21d07a' : '#c7ca2e'}`,
                                                            strokeLinecap: 'round',
                                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                                        },
                                                        trail: {
                                                            stroke: '#053752',
                                                            strokeLinecap: 'round',
                                                        },
                                                        text: {
                                                            fill: `${movie.vote_average >= 7.5 ? '#21d07a' : '#c7ca2e'}`,
                                                            fontSize: '22px',
                                                        },
                                                        background: {
                                                            fill: `${movie.vote_average >= 7.5 ? '#21d07a' : '#c7ca2e'}`
                                                        }
                                                    }}
                                                />
                                            </div>
                                            <div className="detail__content-summary-top-right">
                                                <span className="like-movie">
                                                    <i className={`icon fas fa-heart ${check ? "liked" : ""}`} onClick={() => toggleFavorite(movie.id)}></i>
                                                    <div className="detail__content-summary-top-right-icon">Add this movie to your favorite list</div>
                                                </span>
                                                <span className="wrap-icon" onClick={() => setActiveVideo(true)}><i className="icon fas fa-play no-bg"></i>
                                                    Play Trailer
                                                </span>
                                                <Modal video={video} active={activeVideo} toggleVideo={handleToggleVideo} />
                                            </div>
                                        </div>
                                        <div className="detail__content-summary-bottom">
                                            <p className="color-white">Status: {movie.status}</p>
                                            <p className="color-white">Language: {movie.original_language}</p>
                                            <p className="color-white">Vote Average: {movie.vote_average}</p>
                                            <p className="color-white">Vote Count: {movie.vote_count}</p>
                                        </div>
                                    </div>
                                    <div className="detail__content-overview color-white">
                                        <h3>Overview</h3>
                                        <p>
                                            {movie.overview}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
            <Recommend recommends={recommends} />
        </div>
    )

}

export default SingleMovie;