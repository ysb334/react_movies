import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    console.log(movies);
    return (
        <div className="App">
            <div className={styles.container}>
                {loading ? <h1>LOADING......</h1> : <div className={styles.movies}>
                    {movies.map((av) =>
                        <Movie key={av.id} id={av.id} year={av.year} coverImg={av.medium_cover_image} title={av.title} summary={av.summary} genres={av.genres} />
                    )}
                </div>}
            </div>
        </div>
    );
}

export default Home;