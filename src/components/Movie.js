import ReactLoading from "react-loading";
import MovieCard from "./MovieCard";
import Detail from "./Detail";
import img from "../utils/images/nothing-here.svg";
import { useMovies } from "../hooks/Movies.hook";

const Movie = ({ search }) => {
  const { modalShow, setModalShow, movies, loading } = useMovies({ search });

  if (loading) {
    return (
      <div style={styles.loading}>
        <ReactLoading type="spinningBubbles" color="black" />
      </div>
    );
  }

  if (movies === "Movie not found!") {
    return (
      <div style={styles.nothing}>
        <img src={img} alt="" height="40%" width="40%" />
        <h2>Nothing Here ..</h2>
      </div>
    );
  }

  return (
    <>
      <div style={styles.movie}>
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} setModalShow={setModalShow} />
        ))}
      </div>
      <Detail show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

const styles = {
  movie: {
    display: "flex",
    flexWrap: "wrap",
  },
  loading: {
    display: "flex",
    width: "100vw",
    height: "60vh",
    alignItems: "center",
    justifyContent: "center",
  },
  nothing: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default Movie;
