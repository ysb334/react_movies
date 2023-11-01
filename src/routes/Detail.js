import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const getMovies = async () => {
        const json = await (
            (await fetch(`https://yts.mx/api/v2/movie_details.json.json?movie_id=${id}`))
        ).json();
        
        setMovie(json.data.movie);
    }
    console.log(movie);
    useEffect(() => {
        getMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <img src={movie.background_image_original} alt={movie.title} />
            <h1>{movie.title}</h1>
            <ul>
                {movie.genres.map((av) => <li>{av}</li>)}
                <li>{movie.rating}</li>
                <li>{movie.year}</li>
            </ul>
        </div>
    );
}

export default Detail;
