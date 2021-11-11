import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    await axios
      .get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => {
        setMovie(response.data.data.movie);
        setLoading(false);
      });
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(movie);

  return (
    <div>
      {loading ? (
        <h1>Loading...({id})</h1>
      ) : (
        <div>
          <h1>
            <strong style={{ textDecorationLine: "underline" }}>
              Title : {movie.title}
            </strong>
          </h1>
          <h3>Year : {movie.year}</h3>
          <h3>
            Genres :{" "}
            {movie.genres.map((genre) => (
              <li>{genre}</li>
            ))}
          </h3>
          <h3>Rating : {movie.rating}</h3>
          <h3>
            <p>Summary : {movie.description_full}</p>
          </h3>
          <img src={movie.large_cover_image} alt={movie.title} />
        </div>
      )}
    </div>
  );
}

export default Detail;
