import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchDetail } from "../features/detail/detailsSlice";

const MovieCard = ({ movie, setModalShow }) => {
  const dispatch = useDispatch();

  return (
    <Card
      style={styles.card}
      onClick={() => {
        setModalShow(true);
        dispatch(fetchDetail(movie.imdbID));
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={movie.Poster}
          style={styles.img}
        />
        <CardContent>
          <div style={styles.title}>{movie.Title}</div>
          <div>Release: {movie.Year}</div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const styles = {
  card: {
    display: "flex",
    width: "23%",
    margin: "1%",
    textAlign: "left",
    borderRadius: 10,
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 5px 10px",
    fontFamily: "'Poppins', sans-serif",
  },
  img: {
    height: 300,
    objectFit: "fill",
    padding: "5% 5% 0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
};

export default MovieCard;
